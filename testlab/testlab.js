(()=>{
const $=(s,e=document)=>e.querySelector(s),
esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
api=(p,m='GET',b)=>fetch('/api/testlab/'+p,{method:m,credentials:'same-origin',headers:{'content-type':'application/json'},body:b?JSON.stringify(b):undefined}).then(r=>{if(!r.ok)throw new Error('API '+r.status);return r.json()}),
date=t=>t?new Date(t).toLocaleString('de-DE'):'–';
let reg=[],st={},errs=[],view='overview',sel=null,dev='100%',q='',cat='';
const on=f=>st[f.id]?.enabled==null?f.enabled!==false:!!st[f.id].enabled,
byId=id=>reg.find(f=>f.id===id);

async function load(){
  try{const[r,s]=await Promise.all([fetch('registry.json',{credentials:'same-origin'}).then(x=>{if(!x.ok)throw new Error('registry.json fehlt (Build ausgeführt?)');return x.json()}),api('state')]);
    reg=r.features||[];st=s.state;errs=s.errors}
  catch(e){$('#main').innerHTML='<p class="err">Laden fehlgeschlagen: '+esc(e.message)+'</p>';return}
  render()}

const card=f=>`<div class="card ${on(f)?'':'off'}"><div class="row"><span class="ic">${esc(f.icon)}</span><b>${esc(f.name)}</b><small>v${esc(f.version)}</small></div>
${f.preview?`<img loading="lazy" alt="" src="features/${esc(f.id)}/${esc(f.preview)}">`:''}
<span class="tag">${esc(f.category)}</span><span>${esc(f.description)}</span>
<div class="row"><button class="b p" data-a="open" data-id="${esc(f.id)}" ${on(f)?'':'disabled'}>Öffnen</button>
<button class="b" data-a="toggle" data-id="${esc(f.id)}">${on(f)?'Deaktivieren':'Aktivieren'}</button></div>
<details><summary>Infos</summary>ID: ${esc(f.id)}<br>Status: ${esc(f.status||'–')}<br>Einstieg: ${esc(f.entry)}<br>Hinzugefügt: ${date(f.added)}<br>Zuletzt genutzt: ${date(st[f.id]?.last_used)}</details></div>`;

const views={
overview(){
  const act=reg.filter(on).length,recent=[...reg].sort((a,b)=>b.added-a.added).slice(0,4),
  used=reg.filter(f=>st[f.id]?.last_used).sort((a,b)=>st[b.id].last_used-st[a.id].last_used).slice(0,4);
  return `<h2>Übersicht</h2><div class="grid">${[['Features',reg.length],['Aktiv',act],['Deaktiviert',reg.length-act]].map(([l,n])=>`<div class="card stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div>
  <h3>Zuletzt hinzugefügt</h3><div class="grid">${recent.map(card).join('')||'<p class="mu">Keine Features.</p>'}</div>
  <h3>Zuletzt verwendet</h3><div class="grid">${used.map(card).join('')||'<p class="mu">Noch nichts genutzt.</p>'}</div>`},
features(){
  const cats=[...new Set(reg.map(f=>f.category))].sort(),
  list=reg.filter(f=>(!cat||f.category===cat)&&(!q||(f.name+' '+f.description+' '+f.category).toLowerCase().includes(q.toLowerCase())));
  return `<h2>Features</h2><div class="row"><input id="q" placeholder="Suchen…" value="${esc(q)}"><select id="cat"><option value="">Alle Kategorien</option>${cats.map(c=>`<option ${c===cat?'selected':''}>${esc(c)}</option>`).join('')}</select></div>
  <div class="grid" style="margin-top:14px" id="list">${list.map(card).join('')||'<p class="mu">Keine Treffer.</p>'}</div>`},
lab(){
  const act=reg.filter(on),f=byId(sel)&&on(byId(sel))?byId(sel):null,fe=errs.filter(e=>e.feature_id===sel);
  return `<h2>Testumgebung</h2><div class="row"><select id="pick"><option value="">Feature wählen…</option>${act.map(x=>`<option value="${esc(x.id)}" ${x.id===sel?'selected':''}>${esc(x.icon+' '+x.name)}</option>`).join('')}</select>
  ${[['100%','Desktop'],['768px','Tablet'],['375px','Smartphone']].map(([w,l])=>`<button class="b ${dev===w?'on':''}" data-a="dev" data-w="${w}">${l}</button>`).join('')}
  ${f?`<button class="b" data-a="reload">↻ Zurücksetzen (Ansicht)</button><button class="b d" data-a="cleardata">Testdaten löschen</button>`:''}</div>
  ${f?`<div class="fw"><iframe id="frame" style="width:${dev}" sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-downloads" src="features/${esc(f.id)}/${esc(f.entry)}"></iframe></div>
  <h3>Fehler dieses Features</h3><div class="log" id="elog">${fe.map(e=>`${date(e.ts)} – ${esc(e.message)}`).join('<br>')||'Keine Fehler.'}</div>`:'<p class="mu">Wähle ein aktives Feature.</p>'}`},
admin(){
  return `<h2>Verwaltung</h2><div class="row"><button class="b" data-a="refresh">Registry neu laden</button><button class="b d" data-a="clearall">Alle Testdaten &amp; Fehler zurücksetzen</button></div>
  <p class="mu">Neue Features erscheinen nach dem Deployment automatisch (Build erzeugt registry.json).</p>
  <table><tr><th>Feature</th><th>Version</th><th>Status</th><th>Zuletzt genutzt</th><th></th></tr>${reg.map(f=>`<tr><td>${esc(f.icon+' '+f.name)}</td><td>${esc(f.version)}</td><td>${on(f)?'aktiv':'deaktiviert'}</td><td>${date(st[f.id]?.last_used)}</td><td><button class="b" data-a="toggle" data-id="${esc(f.id)}">${on(f)?'Deaktivieren':'Aktivieren'}</button></td></tr>`).join('')}</table>
  <h3>Fehlerprotokoll</h3><div class="log">${errs.map(e=>`${date(e.ts)} · <b>${esc(e.feature_id)}</b> – ${esc(e.message)}`).join('<br>')||'Keine Fehler.'}</div>
  ${errs.length?'<p><button class="b" data-a="clearerrs">Protokoll leeren</button></p>':''}`}
};

function render(){
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===view));
  $('#main').innerHTML=views[view]();
  const f=$('#frame');
  if(f)f.onload=()=>{try{const w=f.contentWindow;
    w.addEventListener('error',e=>logErr(sel,e.message));
    w.addEventListener('unhandledrejection',e=>logErr(sel,'Promise: '+(e.reason?.message||e.reason)))}catch{}}}

function logErr(id,message){
  errs.unshift({feature_id:id,message:String(message),ts:Date.now()});
  api('errors','POST',{id,message:String(message)}).catch(()=>{});
  const l=$('#elog');if(l)l.innerHTML=errs.filter(e=>e.feature_id===id).map(e=>`${date(e.ts)} – ${esc(e.message)}`).join('<br>')}

async function act(el){
  const a=el.dataset.a,id=el.dataset.id;
  try{
  if(a==='open'){sel=id;view='lab';st[id]={...st[id],last_used:Date.now()};api('used','POST',{id}).catch(()=>{})}
  else if(a==='toggle'){const f=byId(id),v=!on(f);await api('toggle','POST',{id,enabled:v});st[id]={...st[id],enabled:v?1:0}}
  else if(a==='dev')dev=el.dataset.w;
  else if(a==='reload'){const f=$('#frame');if(f)f.src=f.src;return}
  else if(a==='cleardata'){if(!confirm('Testdaten dieses Features löschen?'))return;await api('data/'+sel,'DELETE');const f=$('#frame');if(f)f.src=f.src;return}
  else if(a==='clearall'){if(!confirm('Alle Testdaten und Fehler löschen?'))return;await api('reset','POST',{});errs=[]}
  else if(a==='clearerrs'){await api('errors','DELETE');errs=[]}
  else if(a==='refresh')return load();
  render()}catch(e){alert('Fehler: '+e.message)}}

document.addEventListener('click',e=>{
  const n=e.target.closest('#nav button');if(n){view=n.dataset.v;render();return}
  const b=e.target.closest('[data-a]');if(b)act(b)});
document.addEventListener('input',e=>{if(e.target.id==='q'){q=e.target.value;const p=e.target.selectionStart;render();const i=$('#q');i.focus();i.setSelectionRange(p,p)}});
document.addEventListener('change',e=>{
  if(e.target.id==='cat'){cat=e.target.value;render()}
  if(e.target.id==='pick'){sel=e.target.value||null;if(sel){st[sel]={...st[sel],last_used:Date.now()};api('used','POST',{id:sel}).catch(()=>{})}render()}});
load()})();
