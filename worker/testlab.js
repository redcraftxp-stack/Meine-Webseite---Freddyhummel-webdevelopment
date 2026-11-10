// TestLab-Modul für den bestehenden Worker. Keine Auth-Logik hier: sie wird von dir übergeben.
const getDb = env => env.DB;               // ANPASSEN: Name deines D1-Bindings
const ID = /^[a-z0-9_-]{1,64}$/i;
const J = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
let ready;
const init = db => ready ??= db.batch([
  db.prepare('CREATE TABLE IF NOT EXISTS testlab_state(feature_id TEXT PRIMARY KEY, enabled INTEGER, last_used INTEGER)'),
  db.prepare('CREATE TABLE IF NOT EXISTS testlab_errors(id INTEGER PRIMARY KEY AUTOINCREMENT, feature_id TEXT, message TEXT, ts INTEGER)'),
  db.prepare('CREATE TABLE IF NOT EXISTS testlab_data(feature_id TEXT, k TEXT, v TEXT, PRIMARY KEY(feature_id,k))'),
]);

// isAuthed(request, env) = deine vorhandene CMS-Session-Prüfung (true/false bzw. User-Objekt)
export async function handleTestlab(request, env, isAuthed) {
  const url = new URL(request.url), p = url.pathname, m = request.method;
  const api = p.startsWith('/api/testlab/');
  if (!api && p !== '/testlab' && !p.startsWith('/testlab/')) return null;

  if (!(await isAuthed(request, env)))
    return api ? J({ error: 'unauthorized' }, 401) : Response.redirect(url.origin + '/admin', 302);

  if (!api) {
    if (p === '/testlab') return Response.redirect(url.origin + '/testlab/', 302);
    const r = await env.ASSETS.fetch(request), h = new Headers(r.headers);
    h.set('cache-control', 'private, no-store'); h.set('x-robots-tag', 'noindex');
    return new Response(r.body, { status: r.status, headers: h });
  }

  if (m !== 'GET' && request.headers.get('origin') !== url.origin) return J({ error: 'forbidden' }, 403);
  const db = getDb(env); await init(db);
  const [a, fid, key] = p.slice('/api/testlab/'.length).split('/');
  let b = {}; if (m !== 'GET' && m !== 'DELETE') try { b = await request.json() } catch {}
  const okId = ID.test(b.id || fid || 'x');
  if (!okId) return J({ error: 'bad id' }, 400);

  if (a === 'state' && m === 'GET') {
    const s = await db.prepare('SELECT * FROM testlab_state').all();
    const e = await db.prepare('SELECT feature_id,message,ts FROM testlab_errors ORDER BY id DESC LIMIT 100').all();
    return J({ state: Object.fromEntries(s.results.map(r => [r.feature_id, { enabled: r.enabled, last_used: r.last_used }])), errors: e.results });
  }
  if (a === 'toggle' && m === 'POST' && b.id) {
    await db.prepare('INSERT INTO testlab_state(feature_id,enabled) VALUES(?,?) ON CONFLICT(feature_id) DO UPDATE SET enabled=excluded.enabled').bind(b.id, b.enabled ? 1 : 0).run();
    return J({ ok: true });
  }
  if (a === 'used' && m === 'POST' && b.id) {
    await db.prepare('INSERT INTO testlab_state(feature_id,last_used) VALUES(?,?) ON CONFLICT(feature_id) DO UPDATE SET last_used=excluded.last_used').bind(b.id, Date.now()).run();
    return J({ ok: true });
  }
  if (a === 'errors') {
    if (m === 'POST' && b.id) {
      await db.batch([
        db.prepare('INSERT INTO testlab_errors(feature_id,message,ts) VALUES(?,?,?)').bind(b.id, String(b.message || '').slice(0, 500), Date.now()),
        db.prepare('DELETE FROM testlab_errors WHERE id <= (SELECT MAX(id)-500 FROM testlab_errors)'),
      ]);
      return J({ ok: true });
    }
    if (m === 'DELETE') { await db.prepare('DELETE FROM testlab_errors').run(); return J({ ok: true }); }
  }
  if (a === 'data' && fid) {
    if (key && m === 'GET') { const r = await db.prepare('SELECT v FROM testlab_data WHERE feature_id=? AND k=?').bind(fid, key).first(); return J({ value: r ? JSON.parse(r.v) : null }); }
    if (key && m === 'PUT') {
      const v = JSON.stringify(b.value ?? null); if (v.length > 100000) return J({ error: 'too large' }, 413);
      await db.prepare('INSERT INTO testlab_data(feature_id,k,v) VALUES(?,?,?) ON CONFLICT(feature_id,k) DO UPDATE SET v=excluded.v').bind(fid, key.slice(0, 100), v).run();
      return J({ ok: true });
    }
    if (!key && m === 'DELETE') { await db.prepare('DELETE FROM testlab_data WHERE feature_id=?').bind(fid).run(); return J({ ok: true }); }
  }
  if (a === 'reset' && m === 'POST') {
    await db.batch([db.prepare('DELETE FROM testlab_data'), db.prepare('DELETE FROM testlab_errors')]);
    return J({ ok: true });
  }
  return J({ error: 'not found' }, 404);
}
