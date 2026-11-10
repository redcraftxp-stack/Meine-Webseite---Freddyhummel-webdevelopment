// Shop-Zahlungen: Bestellung, Stripe Checkout (Zahlungsdaten gibt der Kunde NUR bei Stripe ein), Webhook, Vorkasse, Admin.
// Preise/Regeln kommen serverseitig aus shop.config.json + products.json (dem Client wird nie geglaubt).
const getDb = env => env.DB;                          // ANPASSEN: Name deines D1-Bindings
const BASE = '/testlab/features/online-shop/';        // ANPASSEN beim Umzug in den Live-Shop (muss mit "/" enden)
const SAMPLE_IBAN = 'DE89370400440532013000';
class E extends Error {}
const J = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const enc = new TextEncoder(), hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
let ready, cache;
const init = db => ready ??= db.batch([db.prepare('CREATE TABLE IF NOT EXISTS shop_orders(id TEXT PRIMARY KEY, created INTEGER, status TEXT, method TEXT, customer TEXT, items TEXT, totals TEXT, session TEXT, paid_at INTEGER)')]);
async function catalog(env, origin) {
  if (cache && Date.now() - cache.t < 60000) return cache;
  const get = async f => { const r = await env.ASSETS.fetch(new Request(origin + BASE + f)); if (!r.ok) throw new Error('config missing: ' + f); return r.json(); };
  const [cfg, products] = await Promise.all([get('shop.config.json'), get('products.json')]);
  return cache = { t: Date.now(), cfg, products };
}
export function ibanOk(s) {
  s = String(s || '').replace(/\s/g, '').toUpperCase(); if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(s)) return false;
  const r = (s.slice(4) + s.slice(0, 4)).replace(/[A-Z]/g, c => c.charCodeAt(0) - 55); let m = 0;
  for (const d of r) m = (m * 10 + +d) % 97; return m === 1;
}
export function price(cfg, products, items, code) {
  if (!Array.isArray(items) || !items.length || items.length > 50) throw new E('Warenkorb ungültig.');
  let sub = 0; const lines = [], seen = new Set();
  for (const it of items) {
    const p = products.find(x => x.id === it?.id), q = it?.q;
    if (!p || seen.has(p.id) || !Number.isInteger(q) || q < 1 || q > Math.min(p.stock, 20)) throw new E('Ein Artikel ist nicht in dieser Menge verfügbar.');
    seen.add(p.id); lines.push({ id: p.id, name: p.name, unit: p.price, q }); sub += p.price * q;
  }
  const c = code ? cfg.coupons?.[String(code).toUpperCase()] : null; if (code && !c) throw new E('Gutschein ungültig.');
  const disc = c ? (c.percent ? Math.round(sub * c.percent / 100) : Math.min(c.cents || 0, sub)) : 0;
  const ship = sub - disc >= cfg.shipping.freeFromCents ? 0 : cfg.shipping.cents, total = sub - disc + ship, r = cfg.vat.smallBusiness ? 0 : cfg.vat.rate;
  return { lines, sub, disc, ship, total, vat: Math.round(total * r / (100 + r)) };
}
export async function verifySig(raw, header, secret, now = Date.now()) {
  const parts = String(header || '').split(',').map(x => x.split('=')), t = parts.find(p => p[0] === 't')?.[1], sigs = parts.filter(p => p[0] === 'v1').map(p => p[1]);
  if (!t || !sigs.length || Math.abs(now / 1000 - +t) > 300) return false;
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = hex(await crypto.subtle.sign('HMAC', key, enc.encode(t + '.' + raw)));
  return sigs.some(s => { if (s.length !== mac.length) return false; let d = 0; for (let i = 0; i < s.length; i++) d |= s.charCodeAt(i) ^ mac.charCodeAt(i); return d === 0; });
}
async function stripe(env, path, pairs, idem) {
  const r = await fetch('https://api.stripe.com/v1/' + path, { method: 'POST', headers: { authorization: 'Bearer ' + env.STRIPE_SECRET_KEY, 'content-type': 'application/x-www-form-urlencoded', 'idempotency-key': idem }, body: new URLSearchParams(pairs) });
  const j = await r.json(); if (!r.ok) throw new Error(j.error?.message || 'stripe error'); return j;
}
async function mail(env, to, subject, text) {   // optional: Resend (Secret RESEND_API_KEY, Variable MAIL_FROM)
  if (!env.RESEND_API_KEY || !env.MAIL_FROM || !to) return;
  try { await fetch('https://api.resend.com/emails', { method: 'POST', headers: { authorization: 'Bearer ' + env.RESEND_API_KEY, 'content-type': 'application/json' }, body: JSON.stringify({ from: env.MAIL_FROM, to, subject, text }) }); } catch {}
}
const eur = c => (c / 100).toFixed(2).replace('.', ',') + ' €';
const summary = o => o.items.map(i => `${i.q}× ${i.name} – ${eur(i.unit * i.q)}`).join('\n') + `\nVersand: ${o.totals.ship ? eur(o.totals.ship) : 'kostenlos'}${o.totals.disc ? `\nRabatt: −${eur(o.totals.disc)}` : ''}\nGesamt (inkl. MwSt.): ${eur(o.totals.total)}`;
async function getOrder(db, id) { const r = await db.prepare('SELECT * FROM shop_orders WHERE id=?').bind(id).first(); return r && { ...r, customer: JSON.parse(r.customer), items: JSON.parse(r.items), totals: JSON.parse(r.totals) }; }
async function markPaid(env, db, cfg, o) {
  const r = await db.prepare("UPDATE shop_orders SET status='paid', paid_at=? WHERE id=? AND status='pending_payment'").bind(Date.now(), o.id).run();
  if (r?.meta?.changes === 0) return;   // idempotent
  await mail(env, o.customer.email, `Zahlungsbestätigung ${o.id}`, `Hallo ${o.customer.name},\n\nvielen Dank, deine Zahlung ist eingegangen.\nBestellnummer: ${o.id}\n\n${summary(o)}\n\nLieferzeit: ${cfg.shipping.deliveryTime}\n${cfg.company.name}`);
  await mail(env, cfg.company.orderEmail, `Neue bezahlte Bestellung ${o.id}`, `${o.customer.name}, ${o.customer.street}, ${o.customer.zip} ${o.customer.city}\n${o.customer.email}\n\n${summary(o)}`);
}

export async function handleShop(request, env, isAuthed) {
  const url = new URL(request.url), p = url.pathname, m = request.method;
  if (!p.startsWith('/api/shop/')) return null;
  try {
    const db = getDb(env); await init(db);
    const [, , , a, id] = p.split('/');

    if (a === 'webhook' && m === 'POST') {          // Stripe -> Worker, per Signatur geschützt
      const raw = await request.text();
      if (!env.STRIPE_WEBHOOK_SECRET || !(await verifySig(raw, request.headers.get('stripe-signature'), env.STRIPE_WEBHOOK_SECRET))) return J({ error: 'bad signature' }, 400);
      const ev = JSON.parse(raw), s = ev.data?.object, oid = s?.metadata?.order_id || s?.client_reference_id;
      const o = oid && await getOrder(db, oid); if (!o) return J({ ok: true });
      const { cfg } = await catalog(env, url.origin);
      if (['checkout.session.completed', 'checkout.session.async_payment_succeeded'].includes(ev.type) && s.payment_status === 'paid') {
        if (s.amount_total !== o.totals.total) { await db.prepare("UPDATE shop_orders SET status='review' WHERE id=?").bind(o.id).run(); await mail(env, cfg.company.orderEmail, `PRÜFEN: Betrag weicht ab (${o.id})`, `Stripe: ${s.amount_total}, erwartet: ${o.totals.total}`); }
        else await markPaid(env, db, cfg, o);
      } else if (ev.type === 'checkout.session.async_payment_failed') await db.prepare("UPDATE shop_orders SET status='failed' WHERE id=? AND status='pending_payment'").bind(o.id).run();
      else if (ev.type === 'checkout.session.expired') await db.prepare("UPDATE shop_orders SET status='cancelled' WHERE id=? AND status='pending_payment'").bind(o.id).run();
      return J({ ok: true });
    }

    if (a === 'order' && m === 'GET' && id) {       // öffentlich: nur Status + Betrag
      const o = await getOrder(db, id); return o ? J({ status: o.status, total: o.totals.total }) : J({ error: 'not found' }, 404);
    }

    if (a === 'order' && m === 'POST') {            // Bestellung anlegen
      if (request.headers.get('origin') !== url.origin) return J({ error: 'forbidden' }, 403);
      const raw = await request.text(); if (raw.length > 20000) return J({ error: 'too large' }, 413);
      const b = JSON.parse(raw), { cfg, products } = await catalog(env, url.origin);
      if (b.website) return J({ ok: true });         // Honeypot
      const c = b.customer || {}, str = (v, n) => typeof v === 'string' && v.trim() && v.length <= n;
      if (!str(c.name, 100) || !/^\S+@\S+\.\S+$/.test(c.email || '') || c.email.length > 150 || !str(c.street, 120) || !/^\d{5}$/.test(c.zip || '') || !str(c.city, 80)) throw new E('Bitte Adressdaten prüfen.');
      if (!b.consents?.agb || !b.consents?.widerruf || !b.consents?.datenschutz) throw new E('Bitte AGB, Widerrufsbelehrung und Datenschutz bestätigen.');
      if (!['online', 'vorkasse'].includes(b.method) || !cfg.payments?.[b.method]) throw new E('Zahlungsart nicht verfügbar.');
      const t = price(cfg, products, b.items, b.coupon);
      if (b.expectedTotal !== t.total) throw new E('Die Preise haben sich geändert – bitte Seite neu laden.');
      const oid = 'FH-' + hex(crypto.getRandomValues(new Uint8Array(6))).toUpperCase();
      const cust = { name: c.name.trim(), email: c.email.trim(), street: c.street.trim(), zip: c.zip, city: c.city.trim(), country: 'DE' };
      const o = { id: oid, items: t.lines, totals: t, customer: cust };
      const ins = () => db.prepare('INSERT INTO shop_orders(id,created,status,method,customer,items,totals) VALUES(?,?,?,?,?,?,?)').bind(oid, Date.now(), 'pending_payment', b.method, JSON.stringify(cust), JSON.stringify(t.lines), JSON.stringify(t)).run();

      if (b.method === 'vorkasse') {
        if (!ibanOk(cfg.bank?.iban) || (cfg.mode === 'live' && cfg.bank.iban.replace(/\s/g, '') === SAMPLE_IBAN)) throw new E('Vorkasse ist derzeit nicht verfügbar.');
        await ins();
        await mail(env, cust.email, `Bestellung ${oid} – bitte überweisen`, `Hallo ${cust.name},\n\nvielen Dank für deine Bestellung.\n\n${summary(o)}\n\nBitte überweise ${eur(t.total)} innerhalb von ${cfg.bank.dueDays} Tagen an:\n${cfg.bank.holder}\nIBAN: ${cfg.bank.iban}\nBIC: ${cfg.bank.bic}\nVerwendungszweck: ${oid}\n\nNach Zahlungseingang versenden wir die Ware.`);
        await mail(env, cfg.company.orderEmail, `Neue Vorkasse-Bestellung ${oid}`, `${cust.name}, ${cust.street}, ${cust.zip} ${cust.city}\n${cust.email}\n\n${summary(o)}`);
        return J({ orderId: oid, bank: cfg.bank, amount: t.total, reference: oid });
      }
      if (cfg.provider !== 'stripe' || !env.STRIPE_SECRET_KEY) throw new E('Der Zahlungsdienst ist noch nicht eingerichtet.');
      if ((cfg.mode === 'live') !== env.STRIPE_SECRET_KEY.startsWith('sk_live_')) throw new E('Konfiguration inkonsistent (mode/Stripe-Schlüssel).');
      await ins();
      try {
        const q = [['mode', 'payment'], ['locale', 'de'], ['customer_email', cust.email], ['client_reference_id', oid], ['metadata[order_id]', oid],
          ['success_url', `${url.origin}${cfg.shopUrl}?order=${oid}&status=success`], ['cancel_url', `${url.origin}${cfg.shopUrl}?order=${oid}&status=cancel`]];
        const add = (n, name, unit, qty) => q.push([`line_items[${n}][price_data][currency]`, 'eur'], [`line_items[${n}][price_data][product_data][name]`, name], [`line_items[${n}][price_data][unit_amount]`, String(unit)], [`line_items[${n}][quantity]`, String(qty)]);
        t.lines.forEach((l, i) => add(i, l.name, l.unit, l.q)); if (t.ship) add(t.lines.length, 'Versand', t.ship, 1);
        if (t.disc) { const cp = await stripe(env, 'coupons', [['amount_off', String(t.disc)], ['currency', 'eur'], ['duration', 'once'], ['name', 'Rabatt']], 'cp-' + oid); q.push(['discounts[0][coupon]', cp.id]); }
        const s = await stripe(env, 'checkout/sessions', q, 'cs-' + oid);
        await db.prepare('UPDATE shop_orders SET session=? WHERE id=?').bind(s.id, oid).run();
        return J({ orderId: oid, url: s.url });
      } catch (e) { await db.prepare("UPDATE shop_orders SET status='failed' WHERE id=?").bind(oid).run(); throw new E('Zahlung konnte nicht gestartet werden.'); }
    }

    if (a === 'admin') {                            // nur mit CMS-Login
      if (!(await isAuthed(request, env))) return J({ error: 'unauthorized' }, 401);
      if (a === 'admin' && id === 'orders' && m === 'GET') {
        const r = await db.prepare('SELECT * FROM shop_orders ORDER BY created DESC LIMIT 200').all();
        return J({ orders: r.results.map(o => ({ id: o.id, created: o.created, status: o.status, method: o.method, customer: JSON.parse(o.customer), items: JSON.parse(o.items), totals: JSON.parse(o.totals) })) });
      }
      if (id === 'status' && m === 'POST') {
        if (request.headers.get('origin') !== url.origin) return J({ error: 'forbidden' }, 403);
        const b = await request.json(), o = await getOrder(db, b.id);
        if (!o || !['paid', 'shipped', 'cancelled'].includes(b.status)) return J({ error: 'bad request' }, 400);
        await db.prepare('UPDATE shop_orders SET status=?, paid_at=COALESCE(paid_at, CASE WHEN ?=\'paid\' THEN ? END) WHERE id=?').bind(b.status, b.status, Date.now(), b.id).run();
        if (b.status === 'paid' && o.status === 'pending_payment') { const { cfg } = await catalog(env, url.origin); await mail(env, o.customer.email, `Zahlungseingang ${o.id}`, `Hallo ${o.customer.name},\n\ndeine Überweisung ist eingegangen. Wir versenden die Ware in Kürze.\n\n${summary(o)}\n${cfg.company.name}`); }
        return J({ ok: true });
      }
    }
    return J({ error: 'not found' }, 404);
  } catch (e) { return e instanceof E ? J({ error: e.message }, 400) : J({ error: 'Serverfehler' }, 500); }
}
