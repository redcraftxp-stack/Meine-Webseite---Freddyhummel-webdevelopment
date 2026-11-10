(()=>{
'use strict';
const $=(s,e=document)=>e.querySelector(s),
esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
eur=c=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(c/100),date=t=>new Date(t).toLocaleString('de-DE'),
LS={get(k,d){try{return JSON.parse(localStorage.getItem('shop_'+k))??d}catch{return d}},set(k,v){try{localStorage.setItem('shop_'+k,JSON.stringify(v))}catch{}}};
let cfg,P=[],cart=LS.get('cart',{}),view='shop',coupon='',busy=false;const F={q:'',cat:'',sort:'rel'};
const prod=id=>P.find(p=>p.id===id),count=()=>Object.values(cart).reduce((a,b)=>a+b,0),SAMPLE='DE89370400440532013000',
ibanOk=s=>{s=String(s||'').replace(/\s/g,'').toUpperCase();if(!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(s))return false;let m=0;for(const d of (s.slice(4)+s.slice(0,4)).replace(/[A-Z]/g,c=>c.charCodeAt(0)-55))m=(m*10+ +d)%97;return m===1},
bankReady=()=>ibanOk(cfg.bank?.iban)&&!(cfg.mode==='live'&&cfg.bank.iban.replace(/\s/g,'')===SAMPLE),
methods=()=>[cfg.payments.online&&'online',cfg.payments.vorkasse&&bankReady()&&'vorkasse'].filter(Boolean),demo=()=>cfg.provider==='demo';
let tt;const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2400)};
const wrap=h=>'<div class="s-dc">'+h+'</div>',openD=(el,h)=>{el.innerHTML=wrap(h);if(!el.open)el.showModal()},CL='<button class="s-x" data-a="close" aria-label="Schließen">✕</button>';
const img=p=>`<div class="s-img" style="--h:${+p.hue||200}" aria-hidden="true">${esc(p.emoji)}</div>`,stars=r=>{const n=Math.round(r);return'★'.repeat(n)+'☆'.repeat(5-n)};
const lg=k=>cfg.legal[k]?`href="${esc(cfg.legal[k])}" target="_blank" rel="noopener"`:'',ST={pending_payment:'Wartet auf Zahlung',paid:'Bezahlt',shipped:'Versendet',cancelled:'Storniert',failed:'Fehlgeschlagen',review:'Prüfen'};
const grp=s=>String(s).replace(/\s/g,'').replace(/(.{4})/g,'$1 ').trim();

function totals(){const sub=Object.entries(cart).reduce((a,[id,q])=>a+(prod(id)?.price||0)*q,0),c=coupon&&cfg.coupons[coupon],
  disc=c?(c.percent?Math.round(sub*c.percent/100):Math.min(c.cents||0,sub)):0,ship=sub===0||sub-disc>=cfg.shipping.freeFromCents?0:cfg.shipping.cents,total=sub-disc+ship,r=cfg.vat.smallBusiness?0:cfg.vat.rate;
  return{sub,disc,ship,total,vat:Math.round(total*r/(100+r))}}
function setQty(id,q){const p=prod(id);if(!p)return;const max=Math.min(p.stock,20);q=Math.max(0,q);if(q>max){q=max;toast('Maximale Bestellmenge erreicht')}if(q)cart[id]=q;else delete cart[id];LS.set('cart',cart);paint()}
const add=id=>{const p=prod(id);if(!p||p.stock<1)return;if((cart[id]||0)<Math.min(p.stock,20))toast(p.name+' hinzugefügt');setQty(id,(cart[id]||0)+1)};

function card(p){const low=p.stock>0&&p.stock<=5;return `<article class="s-card"><button class="s-imgb" data-a="detail" data-id="${esc(p.id)}" aria-label="Details zu ${esc(p.name)}">${img(p)}${p.stock<1?'<span class="s-badge out">Ausverkauft</span>':low?`<span class="s-badge">Nur noch ${p.stock}</span>`:''}</button>
<div class="s-body"><small>${esc(p.cat)}</small><h3>${esc(p.name)}</h3><span class="s-st">${stars(p.rating)} <small>${p.rating}</small></span>
<div class="s-row"><div><b>${eur(p.price)}</b><p class="s-fine">${cfg.vat.smallBusiness?'':'inkl. MwSt., '}zzgl. Versand</p></div><button class="s-btn p" data-a="add" data-id="${esc(p.id)}" ${p.stock<1?'disabled':''}>In den Warenkorb</button></div></div></article>`}
function gridHtml(){const s={asc:(a,b)=>a.price-b.price,desc:(a,b)=>b.price-a.price,name:(a,b)=>a.name.localeCompare(b.name,'de'),rel:(a,b)=>b.rating-a.rating}[F.sort],
  l=P.filter(p=>(!F.cat||p.cat===F.cat)&&(!F.q||(p.name+' '+p.desc+' '+p.cat).toLowerCase().includes(F.q.toLowerCase()))).sort(s);
  return `<p class="s-mu">${l.length} Produkt${l.length===1?'':'e'}</p><div class="s-grid">${l.map(card).join('')||'<p class="s-mu">Keine Treffer.</p>'}</div>`}
function shop(){const cats=[...new Set(P.map(p=>p.cat))].sort();
  return `<div class="s-bar"><input id="q" type="search" placeholder="Produkte suchen…" value="${esc(F.q)}" aria-label="Suche"><select id="cat" aria-label="Kategorie"><option value="">Alle Kategorien</option>${cats.map(c=>`<option ${c===F.cat?'selected':''}>${esc(c)}</option>`).join('')}</select>
<select id="sort" aria-label="Sortierung">${[['rel','Beliebtheit'],['asc','Preis ↑'],['desc','Preis ↓'],['name','Name A–Z']].map(([v,t])=>`<option value="${v}" ${v===F.sort?'selected':''}>${t}</option>`).join('')}</select></div><div id="res">${gridHtml()}</div>`}
const detail=id=>{const p=prod(id);if(!p)return;openD($('#modal'),`<div class="s-dh"><b>${esc(p.name)}</b>${CL}</div>${img(p)}<p>${esc(p.desc)}</p><div class="s-row" style="margin:0"><b class="s-big">${eur(p.price)}</b><span class="s-st">${stars(p.rating)}</span></div>
<p class="s-fine">${cfg.vat.smallBusiness?'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. ':'inkl. '+cfg.vat.rate+' % MwSt. '}zzgl. Versandkosten · ${p.stock>0?p.stock+' auf Lager':'ausverkauft'}</p><button class="s-btn p w" data-a="add" data-id="${esc(p.id)}" ${p.stock<1?'disabled':''}>In den Warenkorb</button>`)};
const sumRows=t=>`<dl class="s-sum"><dt>Zwischensumme</dt><dd>${eur(t.sub)}</dd>${t.disc?`<dt>Rabatt (${esc(coupon)})</dt><dd>−${eur(t.disc)}</dd>`:''}<dt>Versand ${t.ship?`<small>(frei ab ${eur(cfg.shipping.freeFromCents)})</small>`:''}</dt><dd>${t.ship?eur(t.ship):'kostenlos'}</dd><dt class="tot">Gesamt</dt><dd class="tot">${eur(t.total)}</dd></dl>
<p class="s-fine">${cfg.vat.smallBusiness?'Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.':'inkl. '+eur(t.vat)+' MwSt. ('+cfg.vat.rate+' %)'} · Lieferzeit ${esc(cfg.shipping.deliveryTime)} (Lieferung nur innerhalb Deutschlands)</p>`;
function cartHtml(){const ids=Object.keys(cart).filter(prod),t=totals();
  return `<div class="s-dh"><b>Warenkorb (${count()})</b>${CL}</div>`+(ids.length?ids.map(id=>{const p=prod(id);return `<div class="s-it">${img(p)}<div><b>${esc(p.name)}</b><br><small class="s-mu">${eur(p.price)}</small><div class="s-qty"><button data-a="dec" data-id="${esc(id)}" aria-label="Weniger">−</button><span>${cart[id]}</span><button data-a="inc" data-id="${esc(id)}" aria-label="Mehr">+</button></div></div><div class="s-r"><b>${eur(p.price*cart[id])}</b><button class="s-lnk" data-a="rm" data-id="${esc(id)}">Entfernen</button></div></div>`}).join('')+
  `<form class="s-coupon" data-a="coupon"><input id="cp" placeholder="Gutscheincode" value="${esc(coupon)}" aria-label="Gutscheincode"><button class="s-btn">Einlösen</button></form>${sumRows(t)}<button class="s-btn p w" data-a="checkout">Zur Kasse</button>`:'<p class="s-mu">Dein Warenkorb ist leer.</p>')}
function applyCoupon(v){v=v.trim().toUpperCase();if(!v)coupon='';else if(cfg.coupons[v]){coupon=v;toast('Gutschein eingelöst')}else toast('Ungültiger Gutscheincode');paint()}

function checkout(){if(!count())return;$('#drawer').close();const t=totals(),ms=methods();
  if(!ms.length){openD($('#modal'),`<div class="s-dh"><b>Kasse</b>${CL}</div><p class="s-err">Aktuell ist keine Zahlungsart verfügbar.</p>`);return}
  const ML={online:['Online bezahlen','Kreditkarte, SEPA-Lastschrift, PayPal u. a. – die Zahlungsdaten gibst du sicher beim Zahlungsdienstleister ein.'],vorkasse:['Vorkasse (Überweisung)','Du erhältst unsere Bankverbindung nach der Bestellung. Versand nach Zahlungseingang.']};
  openD($('#modal'),`<div class="s-dh"><b>Kasse</b>${CL}</div><div class="s-os">${Object.entries(cart).filter(([id])=>prod(id)).map(([id,q])=>`<div><span>${q}× ${esc(prod(id).name)}</span><span>${eur(prod(id).price*q)}</span></div>`).join('')}</div>${sumRows(t)}
<form id="co" novalidate><div class="s-fg"><label>Name<input name="name" autocomplete="name"></label><label>E-Mail<input name="email" type="email" autocomplete="email"></label><label class="f2">Straße &amp; Nr.<input name="street" autocomplete="street-address"></label>
<label>PLZ<input name="zip" inputmode="numeric" maxlength="5" autocomplete="postal-code"></label><label>Ort<input name="city" autocomplete="address-level2"></label><label class="f2">Land<input value="Deutschland" disabled></label></div>
<fieldset class="s-pay"><legend>Zahlungsart</legend>${ms.map((m,i)=>`<label><input type="radio" name="method" value="${m}" ${i?'':'checked'}><span>${ML[m][0]}<small>${ML[m][1]}</small></span></label>`).join('')}</fieldset>
<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
<div class="s-fg"><label class="f2 chk"><input type="checkbox" name="agb"> Ich habe die <a ${lg('agb')}>AGB</a> und die <a ${lg('widerruf')}>Widerrufsbelehrung</a> gelesen und akzeptiere sie.</label>
<label class="f2 chk"><input type="checkbox" name="dsgvo"> Ich habe die <a ${lg('datenschutz')}>Datenschutzerklärung</a> zur Kenntnis genommen.</label></div>
<p class="s-err" id="cerr" role="alert"></p><button class="s-btn p w" id="pay">Zahlungspflichtig bestellen · ${eur(t.total)}</button></form>`)}
async function submit(f){
  if(busy)return;const d=Object.fromEntries(new FormData(f)),E=$('#cerr'),err=[];
  if(!(d.name||'').trim())err.push('Bitte Namen angeben.');if(!/^\S+@\S+\.\S+$/.test(d.email||''))err.push('Bitte gültige E-Mail angeben.');if(!(d.street||'').trim())err.push('Bitte Straße angeben.');
  if(!/^\d{5}$/.test(d.zip||''))err.push('PLZ muss 5 Ziffern haben.');if(!(d.city||'').trim())err.push('Bitte Ort angeben.');if(!d.agb)err.push('Bitte AGB und Widerrufsbelehrung bestätigen.');if(!d.dsgvo)err.push('Bitte die Datenschutzerklärung bestätigen.');
  if(err.length){E.innerHTML=err.map(esc).join('<br>');return}
  busy=true;const b=$('#pay'),label=b.textContent;b.disabled=true;b.textContent='Bitte warten…';E.textContent='';
  const body={items:Object.entries(cart).filter(([id])=>prod(id)).map(([id,q])=>({id,q})),coupon,expectedTotal:totals().total,method:d.method,website:d.website,
    customer:{name:d.name,email:d.email,street:d.street,zip:d.zip,city:d.city},consents:{agb:true,widerruf:true,datenschutz:true}};
  try{let res;
    if(demo())res=demoOrder(body);
    else{const r=await fetch('/api/shop/order',{method:'POST',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify(body)});res=await r.json().catch(()=>({}));if(!r.ok)throw new Error(res.error||'Bestellung fehlgeschlagen.')}
    busy=false;
    if(res.url){ if(window.top!==window)openD($('#modal'),`<div class="s-dh"><b>Weiter zur Zahlung</b>${CL}</div><p>Bestellnummer <b>${esc(res.orderId)}</b>. Die Bezahlung öffnet sich in einem neuen Tab.</p><a class="s-btn p w" target="_blank" rel="noopener" href="${esc(res.url)}">Jetzt bezahlen</a>`);else location.href=res.url }
    else{cart={};coupon='';LS.set('cart',cart);paint();
      openD($('#modal'),res.bank?`<div class="s-dh"><b>✅ Bestellung eingegangen</b>${CL}</div><p>Bestellnummer <b>${esc(res.orderId)}</b>. Bitte überweise <b>${eur(res.amount)}</b> innerhalb von ${+res.bank.dueDays||7} Tagen:</p>
<div class="s-bank">Empfänger: <b>${esc(res.bank.holder)}</b><br>IBAN: <code>${esc(grp(res.bank.iban))}</code><br>BIC: <code>${esc(res.bank.bic)}</code><br>Verwendungszweck: <code>${esc(res.reference)}</code></div><p class="s-fine">Nach Zahlungseingang versenden wir die Ware. ${demo()?'(Demo: keine E-Mail versendet.)':'Eine Bestätigung geht per E-Mail an dich.'}</p><button class="s-btn p w" data-a="close">Weiter einkaufen</button>`
      :`<div class="s-dh"><b>✅ Demo-Zahlung erfolgreich</b>${CL}</div><p>Bestellnummer <b>${esc(res.orderId)}</b>. Es wurde nichts abgebucht.</p><button class="s-btn p w" data-a="close">Weiter einkaufen</button>`)}
  }catch(e){busy=false;b.disabled=false;b.textContent=label;E.textContent=e.message}}
function demoOrder(b){const t=totals(),o={id:'DEMO-'+Date.now().toString(36).toUpperCase(),created:Date.now(),status:b.method==='online'?'paid':'pending_payment',method:b.method,customer:b.customer,items:b.items.map(i=>({id:i.id,name:prod(i.id).name,unit:prod(i.id).price,q:i.q})),totals:t};
  const l=LS.get('orders',[]);l.unshift(o);LS.set('orders',l);return b.method==='online'?{orderId:o.id}:{orderId:o.id,bank:cfg.bank,amount:t.total,reference:o.id}}
async function returnFromPayment(){const q=new URLSearchParams(location.search),id=q.get('order'),st=q.get('status');if(!id)return;history.replaceState(null,'',location.pathname);
  if(st==='cancel'){toast('Zahlung abgebrochen – dein Warenkorb bleibt erhalten.');return}
  if(st!=='success')return;cart={};coupon='';LS.set('cart',cart);paint();openD($('#modal'),`<div class="s-dh"><b>Zahlung wird bestätigt…</b>${CL}</div><p id="ps" class="s-mu">Einen Moment bitte.</p>`);
  let s='pending_payment';for(let i=0;i<6&&s==='pending_payment';i++){try{s=(await (await fetch('/api/shop/order/'+encodeURIComponent(id))).json()).status||s}catch{}if(s==='pending_payment')await new Promise(r=>setTimeout(r,2000))}
  openD($('#modal'),s==='paid'||s==='shipped'?`<div class="s-dh"><b>✅ Zahlung erfolgreich</b>${CL}</div><p>Vielen Dank! Bestellnummer <b>${esc(id)}</b>. Du erhältst eine Bestätigung per E-Mail.</p><button class="s-btn p w" data-a="close">Weiter einkaufen</button>`
   :`<div class="s-dh"><b>Zahlung in Prüfung</b>${CL}</div><p>Bestellnummer <b>${esc(id)}</b>. Deine Zahlung ist noch nicht bestätigt (z. B. bei SEPA-Lastschrift dauert das). Du erhältst eine E-Mail, sobald sie eingegangen ist.</p><button class="s-btn w" data-a="close">Schließen</button>`)}

async function adminView(){
  $('#app').innerHTML='<p class="s-mu">Lade…</p>';let orders=[],note='';
  try{if(demo())orders=LS.get('orders',[]);else{const r=await fetch('/api/shop/admin/orders',{credentials:'same-origin'});if(!r.ok)throw 0;orders=(await r.json()).orders}}catch{note='Bestellungen konnten nicht geladen werden (Worker/Login prüfen).'}
  const chk=[];if(demo())chk.push('provider ist „demo“ – es werden keine echten Zahlungen verarbeitet (shop.config.json → "stripe").');if(cfg.mode!=='live')chk.push('mode ist „test“ – für den Live-Betrieb auf „live“ stellen (nur mit sk_live-Schlüssel).');
  if(cfg.payments.vorkasse&&!bankReady())chk.push('Vorkasse ist deaktiviert: IBAN fehlt/ungültig bzw. Beispiel-IBAN im Live-Modus.');
  for(const k of['impressum','agb','datenschutz','widerruf'])if(!cfg.legal[k])chk.push('Rechtstext-Link fehlt: '+k);
  const paid=orders.filter(o=>['paid','shipped'].includes(o.status)).reduce((a,o)=>a+o.totals.total,0);
  $('#app').innerHTML=`<h2>Verwaltung</h2>${chk.length?`<div class="s-warn"><b>Vor dem Livegang prüfen:</b><ul>${chk.map(c=>`<li>${esc(c)}</li>`).join('')}</ul></div>`:''}<div class="s-stats"><div><b>${orders.length}</b>Bestellungen</div><div><b>${eur(paid)}</b>Bezahlt</div><div><b>${orders.filter(o=>o.status==='pending_payment').length}</b>Warten auf Zahlung</div></div>
<h3>Bestellungen</h3>${note?`<p class="s-err">${esc(note)}</p>`:''}<div class="s-tw"><table><tr><th>Nr.</th><th>Datum</th><th>Kunde</th><th>Zahlart</th><th>Summe</th><th>Status</th><th></th></tr>${orders.map(o=>`<tr><td>${esc(o.id)}</td><td>${date(o.created)}</td><td>${esc(o.customer.name)}<br><small class="s-mu">${esc(o.customer.email)}</small></td><td>${o.method==='online'?'Online':'Vorkasse'}</td><td>${eur(o.totals.total)}</td><td>${esc(ST[o.status]||o.status)}</td>
<td class="s-act">${o.status==='pending_payment'?`<button class="s-btn" data-a="ost" data-s="paid" data-id="${esc(o.id)}">Zahlung erhalten</button>`:''}${o.status==='paid'?`<button class="s-btn" data-a="ost" data-s="shipped" data-id="${esc(o.id)}">Versendet</button>`:''}${['pending_payment','paid'].includes(o.status)?`<button class="s-btn d" data-a="ost" data-s="cancelled" data-id="${esc(o.id)}">Stornieren</button>`:''}</td></tr>`).join('')||'<tr><td colspan="7" class="s-mu">Keine Bestellungen.</td></tr>'}</table></div>`}
async function setStatus(id,s){if(demo()){const l=LS.get('orders',[]),o=l.find(x=>x.id===id);if(o){o.status=s;LS.set('orders',l)}}
  else{const r=await fetch('/api/shop/admin/status',{method:'POST',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify({id,status:s})});if(!r.ok){toast('Fehler beim Speichern');return}}adminView()}
function render(){document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===view));if(view==='admin')adminView();else $('#app').innerHTML=shop()}
function paint(){$('#cnt').textContent=count();const d=$('#drawer');if(d.open)d.innerHTML=wrap(cartHtml())}
document.addEventListener('click',e=>{
  if(e.target.tagName==='DIALOG'){e.target.close();return}
  const nv=e.target.closest('#nav button');if(nv){view=nv.dataset.v;render();return}
  if(e.target.closest('#cartbtn')){openD($('#drawer'),cartHtml());return}
  const b=e.target.closest('[data-a]');if(!b)return;const{a,id,s}=b.dataset;
  ({add:()=>add(id),detail:()=>detail(id),close:()=>b.closest('dialog').close(),inc:()=>setQty(id,(cart[id]||0)+1),dec:()=>setQty(id,(cart[id]||0)-1),rm:()=>setQty(id,0),checkout,ost:()=>{if(s!=='cancelled'||confirm('Bestellung stornieren?'))setStatus(id,s)}}[a]||(()=>{}))()});
document.addEventListener('input',e=>{if(e.target.id==='q'){F.q=e.target.value;$('#res').innerHTML=gridHtml()}});
document.addEventListener('change',e=>{const t=e.target;if(t.id==='cat'){F.cat=t.value;$('#res').innerHTML=gridHtml()}else if(t.id==='sort'){F.sort=t.value;$('#res').innerHTML=gridHtml()}});
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target;if(f.id==='co')submit(f);else if(f.dataset.a==='coupon')applyCoupon($('#cp').value)});
(async()=>{
  try{[cfg,P]=await Promise.all([fetch('shop.config.json',{credentials:'same-origin'}).then(r=>r.json()),fetch('products.json',{credentials:'same-origin'}).then(r=>r.json())])}
  catch{$('#app').innerHTML='<p class="s-err">shop.config.json / products.json konnten nicht geladen werden.</p>';return}
  for(const id of Object.keys(cart)){const p=prod(id);if(!p||p.stock<1)delete cart[id];else cart[id]=Math.min(cart[id],p.stock,20)}
  const bn=$('#banner');if(demo()||cfg.mode==='test'){bn.hidden=false;bn.textContent=demo()?'⚠ Demo-Modus – keine echten Zahlungen, keine E-Mails.':'⚠ Testmodus – Zahlungen laufen über den Stripe-Testmodus (Testkarte 4242 4242 4242 4242).'}
  if(cfg.showAdmin)$('#adminnav').hidden=false;
  $('#legal').innerHTML=`<span>Alle Preise in Euro${cfg.vat.smallBusiness?', gemäß § 19 UStG ohne Umsatzsteuer':' inkl. gesetzlicher MwSt.'}, zzgl. Versandkosten (${eur(cfg.shipping.cents)}, frei ab ${eur(cfg.shipping.freeFromCents)}).</span>`+['impressum','agb','datenschutz','widerruf'].map(k=>`<a ${lg(k)}>${{impressum:'Impressum',agb:'AGB',datenschutz:'Datenschutz',widerruf:'Widerrufsbelehrung'}[k]}</a>`).join('');
  render();paint();returnFromPayment()})();
})();
