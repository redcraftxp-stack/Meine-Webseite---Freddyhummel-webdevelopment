/* Website-Designer: Daten (Branchen, Designs, Funktionen) */
var IND={
 handwerk:{l:'Handwerk & Bau',e:'🛠️',name:'Beispiel Bau GmbH',tag:'Zuverlässig. Sauber. Termingerecht.',hero:'Ihr Handwerksbetrieb für Neubau, Umbau und Sanierung',sub:'Von der ersten Beratung bis zur Übergabe – alles aus einer Hand.',cta:'Beratung anfragen',svc:[['Neubau','Von der Planung bis zum Einzug.'],['Sanierung','Aus Alt wird wieder Neu.'],['Ausbau','Dachboden, Keller und Anbau.']],about:'Seit vielen Jahren sind wir Ansprechpartner in der Region. Qualität, Pünktlichkeit und faire Absprachen stehen bei uns im Mittelpunkt.',faq:[['Wie läuft ein Auftrag ab?','Erst Beratung vor Ort, dann ein schriftliches Angebot.'],['Arbeiten Sie auch in der Umgebung?','Ja, im Umkreis unserer Region.']],rec:['contact','gallery','reviews','map','hours']},
 restaurant:{l:'Restaurant & Café',e:'🍽️',name:'Café Beispiel',tag:'Frisch. Regional. Herzlich.',hero:'Genuss, der zusammenbringt',sub:'Saisonale Küche, hausgemachte Kuchen und ein Platz zum Wohlfühlen.',cta:'Tisch reservieren',svc:[['Frühstück','Täglich frisch und regional.'],['Mittagstisch','Wechselnde Gerichte der Saison.'],['Catering','Für Feiern und Veranstaltungen.']],about:'Bei uns kommt frisch auf den Tisch, was die Region hergibt. Genießen Sie in entspannter Atmosphäre.',faq:[['Kann ich reservieren?','Ja, online oder telefonisch.'],['Gibt es vegetarische Gerichte?','Ja, jeden Tag mehrere.']],rec:['booking','gallery','hours','map','social','reviews']},
 beauty:{l:'Friseur & Beauty',e:'💇',name:'Salon Beispiel',tag:'Ihr Wohlfühlmoment.',hero:'Schönheit mit Stil und Sorgfalt',sub:'Professionelle Beratung, hochwertige Produkte und Zeit für Sie.',cta:'Termin buchen',svc:[['Haarschnitt','Typgerecht und modern.'],['Farbe','Schonend und strahlend.'],['Pflege','Behandlungen für gesundes Haar.']],about:'Wir nehmen uns Zeit für Ihre Wünsche und beraten ehrlich, was zu Ihnen passt.',faq:[['Wie buche ich einen Termin?','Online oder telefonisch.'],['Welche Produkte verwenden Sie?','Hochwertige Pflegeprodukte.']],rec:['booking','pricing','gallery','reviews','hours','social']},
 praxis:{l:'Praxis & Gesundheit',e:'🩺',name:'Praxis Beispiel',tag:'Kompetent. Persönlich. Nah.',hero:'Ihre Gesundheit in guten Händen',sub:'Moderne Behandlung, Zeit für Ihre Fragen und kurze Wege.',cta:'Termin vereinbaren',svc:[['Sprechstunde','Ohne lange Wartezeit.'],['Vorsorge','Früh erkennen, gezielt handeln.'],['Beratung','Verständlich und persönlich.']],about:'Wir begleiten Sie mit Erfahrung und Einfühlungsvermögen und nehmen uns Zeit für Ihre Anliegen.',faq:[['Brauche ich einen Termin?','Wir bitten um Terminvereinbarung.'],['Was soll ich mitbringen?','Versichertenkarte und vorhandene Unterlagen.']],rec:['booking','hours','team','map','faq']},
 beratung:{l:'Beratung & Kanzlei',e:'⚖️',name:'Beispiel Beratung',tag:'Klar beraten. Sicher entscheiden.',hero:'Beratung, die Ihnen Sicherheit gibt',sub:'Verständlich, vertraulich und mit klarem Fahrplan.',cta:'Erstgespräch anfragen',svc:[['Erstberatung','Ihre Situation im Überblick.'],['Begleitung','Von der Idee bis zur Umsetzung.'],['Prüfung','Gründlich und nachvollziehbar.']],about:'Wir übersetzen Fachwissen in klare Empfehlungen und begleiten Sie bis zum Ergebnis.',faq:[['Wie läuft die Erstberatung ab?','Kurzes Gespräch, dann ein Vorschlag.'],['Ist das vertraulich?','Selbstverständlich.']],rec:['contact','team','faq','downloads','newsletter','blog']},
 fitness:{l:'Fitness & Sport',e:'💪',name:'Studio Beispiel',tag:'Stärker werden. Gemeinsam.',hero:'Dein Training. Dein Ziel. Dein Studio.',sub:'Kurse, persönliche Betreuung und Platz für alle Levels.',cta:'Probetraining buchen',svc:[['Kurse','Für Einsteiger und Fortgeschrittene.'],['Personal Training','Persönlich und zielgerichtet.'],['Ernährung','Alltagstaugliche Tipps.']],about:'Bei uns zählt, dass du dich wohlfühlst und Fortschritte siehst – egal, wo du startest.',faq:[['Kann ich testen?','Ja, ein Probetraining ist möglich.'],['Gibt es feste Laufzeiten?','Das besprechen wir persönlich.']],rec:['booking','pricing','team','gallery','social','reviews']},
 foto:{l:'Fotografie & Kreativ',e:'📷',name:'Foto Studio Beispiel',tag:'Momente, die bleiben.',hero:'Bilder mit Haltung und Gefühl',sub:'Portraits, Hochzeiten und Business-Fotografie.',cta:'Shooting anfragen',svc:[['Portrait','Natürlich und authentisch.'],['Hochzeit','Ihr großer Tag in Bildern.'],['Business','Für Team, Produkt und Marke.']],about:'Wir halten Momente fest, die Sie noch lange begleiten – ehrlich, ruhig und mit Blick fürs Detail.',faq:[['Wie läuft ein Shooting ab?','Vorgespräch, Shooting, Bildauswahl.'],['Wann erhalte ich die Bilder?','Das klären wir vorab.']],rec:['gallery','video','pricing','contact','social','blog']},
 shop:{l:'Shop & Einzelhandel',e:'🛍️',name:'Laden Beispiel',tag:'Ausgewählt. Persönlich. Lokal.',hero:'Entdecken Sie unser Sortiment',sub:'Ausgewählte Produkte, ehrliche Beratung und schneller Versand.',cta:'Zum Shop',svc:[['Sortiment','Sorgfältig ausgewählt.'],['Beratung','Im Laden und online.'],['Versand','Schnell und zuverlässig.']],about:'Wir führen Produkte, hinter denen wir stehen, und beraten Sie persönlich.',faq:[['Wie lange dauert der Versand?','Das hängt vom Artikel ab.'],['Kann ich zurückgeben?','Ja, innerhalb der gesetzlichen Fristen.']],rec:['shop','newsletter','reviews','hours','map','social']},
 verein:{l:'Verein & Organisation',e:'🤝',name:'Verein Beispiel e. V.',tag:'Gemeinsam mehr bewegen.',hero:'Willkommen in unserer Gemeinschaft',sub:'Termine, Neuigkeiten und alle Informationen zum Mitmachen.',cta:'Mitglied werden',svc:[['Angebote','Für jede Altersgruppe.'],['Termine','Treffen und Veranstaltungen.'],['Mitmachen','Jede Hilfe zählt.']],about:'Bei uns engagieren sich Menschen für Menschen – offen, verlässlich und mit Freude.',faq:[['Wie werde ich Mitglied?','Über das Kontaktformular oder persönlich.'],['Was kostet die Mitgliedschaft?','Die Beiträge finden Sie in der Satzung.']],rec:['blog','gallery','team','downloads','newsletter','contact']},
 sonstiges:{l:'Etwas anderes',e:'✨',name:'Ihr Unternehmen',tag:'Ihr Slogan steht hier.',hero:'Ihre Website, genau auf Sie zugeschnitten',sub:'Klar, schnell und modern – so lernen Kunden Sie kennen.',cta:'Kontakt aufnehmen',svc:[['Leistung eins','Kurze Beschreibung Ihrer Leistung.'],['Leistung zwei','Was macht Sie besonders?'],['Leistung drei','Ein weiterer Vorteil für Kunden.']],about:'Hier erzählen Sie, wer Sie sind, wofür Sie stehen und warum Kunden Ihnen vertrauen.',faq:[['Wie nehme ich Kontakt auf?','Per Formular, Telefon oder E-Mail.'],['Wie lange dauert ein Projekt?','Das hängt vom Umfang ab.']],rec:['contact','faq','reviews']}
};
var DES=[
 {id:'klar',n:'Klar & Hell',d:'Ruhig, übersichtlich, seriös.',t:['hell'],c:{bg:'#f7f9fc',sf:'#ffffff',ink:'#14212e',mu:'#5b6674',pr:'#1a3f5c',ac:'#2589b0',ln:'#dbe4ec'},hf:'serif',bf:'sans',r:8,hero:'split',card:'shadow',btn:'solid',up:false},
 {id:'dunkel',n:'Modern Dunkel',d:'Dunkler Hintergrund, klare Akzente.',t:['dunkel'],c:{bg:'#0f1420',sf:'#171e2e',ink:'#eef1f7',mu:'#9aa4b8',pr:'#6b9bff',ac:'#4fd1c5',ln:'#27304a'},hf:'sans',bf:'sans',r:12,hero:'center',card:'outline',btn:'pill',up:false},
 {id:'elegant',n:'Elegant Serif',d:'Edel, ruhig, mit Serifenschrift.',t:['hell','elegant'],c:{bg:'#fbf8f3',sf:'#ffffff',ink:'#2a2420',mu:'#6f6459',pr:'#7a5c3e',ac:'#b08d57',ln:'#e6dccd'},hf:'serif',bf:'serif',r:2,hero:'full',card:'flat',btn:'outline',up:true},
 {id:'bold',n:'Bold & Farbig',d:'Kräftige Farben, viel Energie.',t:['farbig'],c:{bg:'#ffffff',sf:'#fff4ef',ink:'#111111',mu:'#555555',pr:'#ff5a36',ac:'#ffc83d',ln:'#f0d9d0'},hf:'sans',bf:'sans',r:16,hero:'band',card:'flat',btn:'pill',up:false},
 {id:'minimal',n:'Minimal Mono',d:'Reduziert, technisch, nüchtern.',t:['hell','minimal'],c:{bg:'#ffffff',sf:'#f5f5f5',ink:'#111111',mu:'#666666',pr:'#111111',ac:'#888888',ln:'#dddddd'},hf:'mono',bf:'mono',r:0,hero:'center',card:'outline',btn:'square',up:false},
 {id:'natur',n:'Natur & Frisch',d:'Grün, freundlich, nahbar.',t:['hell','farbig'],c:{bg:'#f3f8f1',sf:'#ffffff',ink:'#1d2b1f',mu:'#566a58',pr:'#2f6b3f',ac:'#8bbf5a',ln:'#d8e6d3'},hf:'round',bf:'sans',r:14,hero:'split',card:'shadow',btn:'pill',up:false},
 {id:'handwerk',n:'Robust & Kräftig',d:'Klare Kanten, starke Wirkung.',t:['hell'],c:{bg:'#f2f2f0',sf:'#ffffff',ink:'#1c1c1c',mu:'#5a5a5a',pr:'#e0a100',ac:'#2b2b2b',ln:'#d6d6d2'},hf:'sans',bf:'sans',r:4,hero:'full',card:'shadow',btn:'square',up:true},
 {id:'rose',n:'Boutique Rosé',d:'Weich, stilvoll, persönlich.',t:['hell','elegant'],c:{bg:'#fff7f7',sf:'#ffffff',ink:'#3b2a2e',mu:'#7d6268',pr:'#c4577a',ac:'#e8b4c4',ln:'#f2d9df'},hf:'serif',bf:'sans',r:20,hero:'center',card:'shadow',btn:'pill',up:false},
 {id:'tech',n:'Tech Violett',d:'Modern, dunkel, mit Farbverlauf.',t:['dunkel','farbig'],c:{bg:'#0b1020',sf:'#131a33',ink:'#e8ecff',mu:'#98a2d0',pr:'#7a6cff',ac:'#00c2ff',ln:'#26305a'},hf:'sans',bf:'sans',r:14,hero:'full',card:'outline',btn:'pill',up:false},
 {id:'ocean',n:'Ocean Frisch',d:'Hell und klar mit blauem Akzent.',t:['hell','farbig'],c:{bg:'#f0f9ff',sf:'#ffffff',ink:'#0b2a3b',mu:'#46677a',pr:'#0a7ea4',ac:'#38bdf8',ln:'#cfe8f3'},hf:'sans',bf:'sans',r:10,hero:'split',card:'shadow',btn:'solid',up:false},
 {id:'terra',n:'Warm Terrakotta',d:'Warme Erdtöne, gemütlich.',t:['hell','farbig'],c:{bg:'#fdf6ef',sf:'#ffffff',ink:'#3a2418',mu:'#7a5a48',pr:'#c2562e',ac:'#e9a36a',ln:'#f0dccb'},hf:'serif',bf:'sans',r:12,hero:'split',card:'flat',btn:'solid',up:false},
 {id:'gold',n:'Premium Schwarz-Gold',d:'Exklusiv, kontrastreich.',t:['dunkel','elegant'],c:{bg:'#111111',sf:'#1b1b1b',ink:'#f3ede0',mu:'#b3a98f',pr:'#c9a24a',ac:'#8a6d2a',ln:'#33302a'},hf:'serif',bf:'serif',r:2,hero:'full',card:'outline',btn:'outline',up:true}
];
var FEAT=[
 ['contact','Kontaktformular','Kunden schreiben Ihnen direkt von der Website.','Kontakt & Termine'],
 ['booking','Terminbuchung','Kunden wählen Datum und Uhrzeit online.','Kontakt & Termine'],
 ['hours','Öffnungszeiten','Übersichtliche Zeiten auf einen Blick.','Kontakt & Termine'],
 ['map','Karte & Anfahrt','Standort und Wegbeschreibung.','Kontakt & Termine'],
 ['whatsapp','WhatsApp-Button','Schneller Kontakt per Messenger.','Kontakt & Termine'],
 ['gallery','Bildergalerie','Arbeiten und Eindrücke zeigen.','Inhalte'],
 ['video','Video','Ein Vorstellungs- oder Imagevideo einbinden.','Inhalte'],
 ['team','Team','Gesichter und Ansprechpartner vorstellen.','Inhalte'],
 ['blog','News / Blog','Neuigkeiten und Beiträge veröffentlichen.','Inhalte'],
 ['faq','Häufige Fragen','Antworten, bevor Kunden fragen.','Inhalte'],
 ['downloads','Downloads','Infoblätter, Preislisten oder Formulare.','Inhalte'],
 ['reviews','Kundenstimmen','Bewertungen von Kunden zeigen.','Vertrauen'],
 ['stats','Zahlen & Fakten','Erfahrung und Erfolge kompakt.','Vertrauen'],
 ['logos','Partner & Referenzen','Logos von Partnern oder Kunden.','Vertrauen'],
 ['pricing','Preise & Pakete','Angebote übersichtlich vergleichen.','Verkauf'],
 ['shop','Online-Shop','Produkte anzeigen und verkaufen.','Verkauf'],
 ['newsletter','Newsletter','E-Mail-Adressen für Neuigkeiten sammeln.','Verkauf'],
 ['chatbot','Chatbot','Ein Assistent beantwortet erste Fragen.','Extras'],
 ['lang','Mehrere Sprachen','Sprachumschalter für internationale Kunden.','Extras'],
 ['social','Social Media','Verlinkung zu Ihren Profilen.','Extras'],
 ['cookie','Cookie-Hinweis','Hinweis zur Datenschutz-Einwilligung.','Extras']
];
var FONTS={serif:'Georgia,"Times New Roman",serif',sans:'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif',mono:'ui-monospace,"SF Mono",Menlo,Consolas,monospace',round:'ui-rounded,"Trebuchet MS","Segoe UI",sans-serif'};
/* Vorschau: erzeugt aus der Auswahl eine komplette Beispiel-Website (HTML-String für den Vorschau-Rahmen) */
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function lum(hex){var n=parseInt(hex.slice(1),16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;return (0.2126*r+0.7152*g+0.0722*b)/255}
function designOf(id){for(var i=0;i<DES.length;i++)if(DES[i].id===id)return DES[i];return DES[0]}
function css(S,D){
  var c=D.c,pr=S.color||c.pr,r=S.radius!=null?S.radius:D.r,hf=FONTS[S.font||D.hf]||FONTS.sans,bf=FONTS[S.font||D.bf]||FONTS.sans,onpr=lum(pr)>0.58?'#111111':'#ffffff';
  return ':root{--bg:'+c.bg+';--sf:'+c.sf+';--ink:'+c.ink+';--mu:'+c.mu+';--pr:'+pr+';--ac:'+c.ac+';--ln:'+c.ln+';--onpr:'+onpr+';--r:'+r+'px;--hf:'+hf+';--bf:'+bf+'}'+
'*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:var(--bf);background:var(--bg);color:var(--ink);line-height:1.6;font-size:16px}a{color:inherit}'+
'.w{max-width:1040px;margin:0 auto;padding:0 22px}h1,h2,h3{font-family:var(--hf);line-height:1.15}h1{font-size:clamp(1.9rem,5vw,3rem)}h2{font-size:clamp(1.5rem,3.4vw,2rem);margin-bottom:.5em}h3{font-size:1.1rem;margin-bottom:.3em}p{color:var(--mu)}'+
'.up h1,.up h2,.up h3,.up .brand b{text-transform:uppercase;letter-spacing:.06em}section{padding:60px 0}.alt{background:var(--sf)}.cap{font-size:.78rem;color:var(--mu);margin-top:10px;opacity:.85}'+
'.btn{display:inline-block;padding:.7em 1.25em;border-radius:var(--r);background:var(--pr);color:var(--onpr);text-decoration:none;font-weight:600;font-size:.94rem;border:2px solid var(--pr)}.b-pill .btn{border-radius:999px}.b-square .btn{border-radius:0}.b-outline .btn{background:transparent;color:var(--pr)}.btn.sec{background:transparent;color:inherit;border-color:var(--ln)}'+
'.card{background:var(--sf);border-radius:var(--r);padding:22px}.alt .card{background:var(--bg)}.c-shadow .card{box-shadow:0 8px 26px rgba(0,0,0,.09)}.c-outline .card{border:1px solid var(--ln);background:transparent}.c-flat .card{background:color-mix(in srgb,var(--pr) 9%,var(--bg))}'+
'.g3{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}.g2{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}'+
'.h{position:sticky;top:0;z-index:20;background:var(--bg);border-bottom:1px solid var(--ln)}.hb{display:flex;align-items:center;justify-content:space-between;gap:14px;min-height:66px}.brand{display:flex;align-items:center;gap:10px;text-decoration:none}.brand b{font-family:var(--hf);font-size:1.1rem}.mk{width:34px;height:34px;border-radius:var(--r);background:var(--pr);color:var(--onpr);display:grid;place-items:center;font-weight:700}.brand img{height:34px;width:auto;border-radius:4px}nav{display:flex;gap:20px;font-size:.92rem}nav a{text-decoration:none;color:var(--mu)}.hr{display:flex;align-items:center;gap:10px}.pillx{border:1px solid var(--ln);border-radius:999px;padding:.25em .8em;font-size:.82rem;color:var(--mu)}'+
'.himg{aspect-ratio:4/3;border-radius:var(--r);background:linear-gradient(135deg,var(--pr),var(--ac)) center/cover;display:grid;place-items:center;font-size:4.5rem}'+
'.hero-split{padding:64px 0}.hero-split .hg{display:grid;grid-template-columns:1.1fr .9fr;gap:36px;align-items:center}.hero-split p{margin:14px 0 22px;font-size:1.08rem}'+
'.hero-center{padding:90px 0;text-align:center}.hero-center p{margin:14px auto 24px;max-width:36em;font-size:1.08rem}.hero-center .himg{max-width:760px;margin:36px auto 0}'+
'.hero-full{position:relative;color:#fff;padding:110px 0;background:linear-gradient(135deg,var(--pr),var(--ac)) center/cover}.hero-full::before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.38)}.hero-full .w{position:relative}.hero-full p{color:rgba(255,255,255,.9);margin:14px 0 24px;max-width:34em;font-size:1.08rem}.hero-full .btn{background:#fff;color:#111;border-color:#fff}'+
'.hero-band{background:var(--pr);color:var(--onpr);padding:80px 0}.hero-band .hg{display:grid;grid-template-columns:1.1fr .9fr;gap:36px;align-items:center}.hero-band p{color:inherit;opacity:.9;margin:14px 0 22px;font-size:1.08rem}.hero-band .btn{background:var(--onpr);color:var(--pr);border-color:var(--onpr)}'+
'.num{width:38px;height:38px;border-radius:50%;background:color-mix(in srgb,var(--pr) 16%,transparent);color:var(--pr);display:grid;place-items:center;font-weight:700;margin-bottom:12px}'+
'.tile{aspect-ratio:1;border-radius:var(--r);display:grid;place-items:center;color:#fff;font-size:.85rem;background:linear-gradient(135deg,var(--pr),var(--ac))}.tile:nth-child(2n){background:linear-gradient(225deg,var(--ac),var(--pr))}.tile:nth-child(3n){filter:saturate(.7) brightness(.92)}'+
'.avatar{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--pr),var(--ac));color:#fff;display:grid;place-items:center;font-weight:700;margin-bottom:10px}'+
'.price{font-family:var(--hf);font-size:1.9rem;color:var(--pr);margin:6px 0}.card ul{list-style:none;color:var(--mu);margin:10px 0 16px;font-size:.92rem}.card li{padding:4px 0}.card li::before{content:"✓ ";color:var(--pr)}'+
'.st{color:#d79a00;letter-spacing:2px}.big{font-family:var(--hf);font-size:2.2rem;color:var(--pr)}'+
'details{border-top:1px solid var(--ln);padding:14px 0}details:last-child{border-bottom:1px solid var(--ln)}summary{cursor:pointer;font-weight:600}details p{margin-top:8px}'+
'.chips{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}.chip{border:1px solid var(--ln);border-radius:999px;padding:.35em .9em;font-size:.88rem}.chip.on{background:var(--pr);color:var(--onpr);border-color:var(--pr)}'+
'table{width:100%;border-collapse:collapse}td{padding:8px 0;border-bottom:1px solid var(--ln);font-size:.94rem;color:var(--mu)}td:last-child{text-align:right;color:var(--ink)}'+
'.map{aspect-ratio:16/7;border-radius:var(--r);background:repeating-linear-gradient(45deg,var(--sf),var(--sf) 14px,var(--bg) 14px,var(--bg) 28px);border:1px solid var(--ln);display:grid;place-items:center;font-size:2.4rem}'+
'.inp{width:100%;padding:.7em .8em;border:1px solid var(--ln);border-radius:var(--r);background:var(--bg);color:var(--ink);font:inherit;margin-bottom:10px}.row{display:flex;gap:8px}.row .inp{margin:0}'+
'.vid{aspect-ratio:16/9;border-radius:var(--r);background:linear-gradient(135deg,#111,color-mix(in srgb,var(--pr) 60%,#000));display:grid;place-items:center;color:#fff;font-size:3rem}'+
'.lg{display:flex;flex-wrap:wrap;gap:14px}.lg span{flex:1;min-width:110px;text-align:center;padding:16px;border:1px dashed var(--ln);border-radius:var(--r);color:var(--mu);font-size:.85rem}'+
'.dl{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--ln)}'+
'footer{padding:34px 0;border-top:1px solid var(--ln);font-size:.88rem;color:var(--mu)}.fb{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;align-items:center}.soc{display:flex;gap:8px}.soc span{width:30px;height:30px;border-radius:50%;background:var(--pr);color:var(--onpr);display:grid;place-items:center;font-size:.72rem;font-weight:700}'+
'.fab{position:fixed;right:16px;width:50px;height:50px;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:1.4rem;box-shadow:0 6px 18px rgba(0,0,0,.28);z-index:30}.fab.wa{bottom:16px;background:#25d366}.fab.ch{background:var(--pr);color:var(--onpr)}.fab.ch.b1{bottom:16px}.fab.ch.b2{bottom:76px}'+
'.ck{position:fixed;left:12px;right:12px;bottom:12px;background:var(--sf);border:1px solid var(--ln);border-radius:var(--r);padding:12px 14px;display:flex;gap:12px;align-items:center;justify-content:space-between;font-size:.82rem;color:var(--mu);z-index:40;box-shadow:0 8px 24px rgba(0,0,0,.2)}'+
'@media(max-width:720px){nav{display:none}.hero-split .hg,.hero-band .hg,.g2{grid-template-columns:1fr}.hero-split,.hero-center{padding:44px 0}.hero-full{padding:70px 0}section{padding:44px 0}.hr .pillx{display:none}.hr .btn{padding-top:.45em;padding-bottom:.45em}}';}
function buildPreview(S){
  var D=designOf(S.design),I=IND[S.ind]||IND.sonstiges,has=function(f){return S.feats.indexOf(f)>-1};
  var name=S.name||I.name,tag=S.tag||I.tag,city=S.city||'Ihre Stadt',phone=S.phone||'0000 000000',mail=S.email||'info@ihre-domain.de';
  var hero=S.hero||D.hero,cta=I.cta,init=esc((name.trim()[0]||'W').toUpperCase());
  var cls=['dz'];if(D.up)cls.push('up');cls.push('c-'+D.card);cls.push('b-'+D.btn);
var logo=S.logo?'<img src="'+S.logo+'" alt="">':'<span class="mk">🖼️</span>';
 var nav='<a href="#s">Leistungen</a><a href="#a">Über uns</a>'+(has('gallery')?'<a href="#g">Galerie</a>':'')+(has('shop')?'<a href="#sh">Shop</a>':'')+(has('blog')?'<a href="#b">News</a>':'')+'<a href="#k">Kontakt</a>';
  var h='<header class="h"><div class="w hb"><a class="brand" href="#top">'+logo+'<b>'+esc(name)+'</b></a><nav>'+nav+'</nav><div class="hr">'+(has('lang')?'<span class="pillx">DE ▾</span>':'')+(has('shop')?'<span class="pillx">🛒 0</span>':'')+'<a class="btn" href="#k">'+esc(cta)+'</a></div></div></header>';
  var img='<div class="himg"'+(S.heroImg?' style="background-image:url('+S.heroImg+')"':'')+'>'+(S.heroImg?'':I.e)+'</div>';
  var txt='<h1>'+esc(I.hero)+'</h1><p>'+esc(I.sub)+'</p><a class="btn" href="#k">'+esc(cta)+'</a> <a class="btn sec" href="#s" style="margin-left:6px">Mehr erfahren</a>';
  var heroH=hero==='split'?'<section class="hero-split" id="top"><div class="w hg"><div>'+txt+'</div>'+img+'</div></section>'
    :hero==='center'?'<section class="hero-center" id="top"><div class="w">'+txt+img+'</div></section>'
    :hero==='band'?'<section class="hero-band" id="top"><div class="w hg"><div>'+txt+'</div>'+img+'</div></section>'
    :'<section class="hero-full" id="top"'+(S.heroImg?' style="background-image:url('+S.heroImg+')"':'')+'><div class="w">'+txt+'</div></section>';
  var o=[h,heroH];
  if(has('stats'))o.push('<section class="alt"><div class="w g3" style="text-align:center">'+[['100+','Projekte'],['10','Jahre Erfahrung'],['24 h','Antwortzeit'],['5 ★','Zufriedenheit']].map(function(x){return '<div><div class="big">'+x[0]+'</div><p>'+x[1]+'</p></div>'}).join('')+'<p class="cap" style="grid-column:1/-1">Beispielwerte – hier stehen später Ihre echten Zahlen.</p></div></section>');
  if(has('logos'))o.push('<section><div class="w"><h2 style="text-align:center">Partner & Referenzen</h2><div class="lg">'+'<span>Logo</span>'.repeat(5)+'</div></div></section>');
  o.push('<section id="s"><div class="w"><h2>Leistungen</h2><div class="g3">'+I.svc.map(function(s,i){return '<div class="card"><div class="num">'+(i+1)+'</div><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></div>'}).join('')+'</div></div></section>');
  o.push('<section class="alt" id="a"><div class="w g2"><div><h2>Über uns</h2><p>'+esc(I.about)+'</p><p class="cap">Beispieltext – wird durch Ihren eigenen ersetzt.</p></div><div class="himg" style="aspect-ratio:5/4">'+esc(I.e)+'</div></div></section>');
  if(has('gallery'))o.push('<section id="g"><div class="w"><h2>Galerie</h2><div class="g3" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">'+[1,2,3,4,5,6].map(function(n){return '<div class="tile">Bild '+n+'</div>'}).join('')+'</div></div></section>');
  if(has('video'))o.push('<section class="alt"><div class="w"><h2>Video</h2><div class="vid">▶</div></div></section>');
  if(has('pricing'))o.push('<section><div class="w"><h2>Preise & Pakete</h2><div class="g3">'+[['Basis',['Leistung eins','Leistung zwei']],['Standard',['Alles aus Basis','Zusatzleistung','Bevorzugter Termin']],['Premium',['Alles aus Standard','Persönliche Betreuung','Extras']]].map(function(p){return '<div class="card"><h3>'+p[0]+'</h3><div class="price">XX €</div><ul>'+p[1].map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><a class="btn" href="#k">Auswählen</a></div>'}).join('')+'</div><p class="cap">Beispielpakete mit Platzhalter-Preisen – Ihre Preise tragen Sie später ein.</p></div></section>');
  if(has('shop'))o.push('<section class="alt" id="sh"><div class="w"><h2>Shop</h2><div class="g3" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">'+[1,2,3,4].map(function(n){return '<div class="card" style="padding:12px"><div class="tile" style="aspect-ratio:4/3;margin-bottom:10px">Produkt '+n+'</div><h3 style="font-size:.98rem">Beispielprodukt '+n+'</h3><div class="price" style="font-size:1.2rem">XX €</div><a class="btn" style="padding:.45em .9em;font-size:.84rem" href="#sh">In den Warenkorb</a></div>'}).join('')+'</div></div></section>');
  if(has('team'))o.push('<section><div class="w"><h2>Unser Team</h2><div class="g3">'+['VN','MM','AB'].map(function(a,i){return '<div class="card"><div class="avatar">'+a+'</div><h3>Vorname Nachname</h3><p>'+['Geschäftsführung','Beratung','Service'][i]+'</p></div>'}).join('')+'</div></div></section>');
  if(has('reviews'))o.push('<section class="alt"><div class="w"><h2>Kundenstimmen</h2><div class="g3">'+[1,2,3].map(function(){return '<div class="card"><div class="st">★★★★★</div><p style="margin:8px 0">„Hier erscheint eine echte Kundenstimme.“</p><b style="font-size:.9rem">Name, Ort</b></div>'}).join('')+'</div><p class="cap">Beispielplatzhalter – es werden nur echte Bewertungen veröffentlicht.</p></div></section>');
  if(has('blog'))o.push('<section id="b"><div class="w"><h2>News</h2><div class="g3">'+[1,2,3].map(function(n){return '<div class="card"><div class="tile" style="aspect-ratio:16/9;margin-bottom:12px">Bild</div><p class="cap">01.01.2026</p><h3>Beispielbeitrag '+n+'</h3><p>Kurzer Anreißertext des Beitrags …</p></div>'}).join('')+'</div></div></section>');
  if(has('faq')){var fq=I.faq.concat([['Wie kann ich Sie erreichen?','Über das Kontaktformular, per Telefon oder E-Mail.']]);o.push('<section class="alt"><div class="w"><h2>Häufige Fragen</h2>'+fq.map(function(q){return '<details><summary>'+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>'}).join('')+'</div></section>');}
  if(has('booking')||has('hours'))o.push('<section><div class="w g2" style="align-items:start">'+(has('booking')?'<div class="card"><h2 style="font-size:1.4rem">Termin buchen</h2><div class="chips">'+['Mo 12.','Di 13.','Mi 14.','Do 15.','Fr 16.'].map(function(d,i){return '<span class="chip'+(i===1?' on':'')+'">'+d+'</span>'}).join('')+'</div><div class="chips">'+['09:00','10:30','13:00','15:30'].map(function(d,i){return '<span class="chip'+(i===2?' on':'')+'">'+d+'</span>'}).join('')+'</div><a class="btn" href="#k">Termin anfragen</a><p class="cap">Beispielansicht der Terminbuchung.</p></div>':'')+(has('hours')?'<div class="card"><h2 style="font-size:1.4rem">Öffnungszeiten</h2><table>'+[['Montag – Freitag','08:00 – 17:00'],['Samstag','09:00 – 13:00'],['Sonntag','geschlossen']].map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>'}).join('')+'</table><p class="cap">Beispielzeiten.</p></div>':'')+'</div></section>');
  if(has('downloads'))o.push('<section class="alt"><div class="w"><h2>Downloads</h2>'+['Infoblatt','Preisliste','Formular'].map(function(d){return '<div class="dl"><span>📄 '+d+' (PDF)</span><a class="btn sec" href="#k">Herunterladen</a></div>'}).join('')+'</div></section>');
  if(has('newsletter'))o.push('<section><div class="w card" style="text-align:center"><h2>Newsletter</h2><p>Neuigkeiten direkt ins Postfach.</p><div class="row" style="max-width:460px;margin:16px auto 0"><input class="inp" placeholder="Ihre E-Mail-Adresse" disabled><a class="btn" href="#k">Anmelden</a></div></div></section>');
  if(has('map'))o.push('<section class="alt"><div class="w"><h2>So finden Sie uns</h2><div class="map">📍</div><p class="cap">'+esc(city)+' – Beispiel-Kartenansicht.</p></div></section>');
  o.push('<section id="k"><div class="w g2" style="align-items:start"><div><h2>Kontakt</h2><p>Wir freuen uns auf Ihre Nachricht.</p><p style="margin-top:14px"><b style="color:var(--ink)">'+esc(name)+'</b><br>'+esc(city)+'<br>Tel. '+esc(phone)+'<br>'+esc(mail)+'</p></div>'+(has('contact')?'<div class="card"><input class="inp" placeholder="Name" disabled><input class="inp" placeholder="E-Mail" disabled><textarea class="inp" rows="3" placeholder="Ihre Nachricht" disabled></textarea><a class="btn" href="#k">Nachricht senden</a></div>':'<div class="card"><p>Rufen Sie uns an oder schreiben Sie eine E-Mail.</p><a class="btn" href="#k" style="margin-top:12px">Anrufen</a></div>')+'</div></section>');
  o.push('<footer><div class="w fb"><span>© '+new Date().getFullYear()+' '+esc(name)+' · Impressum · Datenschutz</span>'+(has('social')?'<div class="soc"><span>in</span><span>ig</span><span>f</span></div>':'')+'</div></footer>');
  if(has('whatsapp'))o.push('<a class="fab wa" href="#k" aria-label="WhatsApp">💬</a>');
  if(has('chatbot'))o.push('<a class="fab ch '+(has('whatsapp')?'b2':'b1')+'" href="#k" aria-label="Chat">🤖</a>');
  if(has('cookie'))o.push('<div class="ck"><span>Wir verwenden Cookies, um die Website zu verbessern.</span><a class="btn" style="padding:.35em .9em;font-size:.8rem" href="#top">OK</a></div>');
  return '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css(S,D)+'</style></head><body class="'+cls.join(' ')+'">'+o.join('')+'</body></html>';
}
/* Website-Designer: Oberfläche und Logik */
(function(){
'use strict';
var KEY='fh-designer-v1',STEPS=['Branche','Design','Funktionen','Inhalte','Fertig'];
var HEROES=[['','Standard des Designs'],['split','Text links, Bild rechts'],['center','Zentriert'],['full','Vollbild'],['band','Farbband']];
var FONT_OPTS=[['','Standard des Designs'],['serif','Serif (klassisch)'],['sans','Sans (modern)'],['mono','Mono (technisch)'],['round','Rund (freundlich)']];
var FILTERS=[['alle','Alle'],['hell','Hell'],['dunkel','Dunkel'],['farbig','Farbig'],['elegant','Elegant'],['minimal','Minimal']];
function own(o,k){return Object.prototype.hasOwnProperty.call(o,k)}
function def(){return {ind:'handwerk',design:'klar',feats:IND.handwerk.rec.slice(),ftouch:false,name:'',tag:'',city:'',phone:'',email:'',color:'',radius:null,font:'',hero:'',logo:'',heroImg:'',step:0}}
function clean(o){var d=def(),r={};o=o&&typeof o==='object'?o:{};
 r.ind=typeof o.ind==='string'&&own(IND,o.ind)?o.ind:d.ind;
 r.design=DES.some(function(x){return x.id===o.design})?o.design:d.design;
 var ids=FEAT.map(function(f){return f[0]});
 r.feats=(Array.isArray(o.feats)?o.feats:d.feats).filter(function(f,i,a){return ids.indexOf(f)>-1&&a.indexOf(f)===i});
 r.ftouch=!!o.ftouch;
 ['name','tag','city','phone','email'].forEach(function(k){r[k]=typeof o[k]==='string'?o[k].slice(0,k==='tag'?90:80):''});
 r.color=/^#[0-9a-f]{6}$/i.test(o.color||'')?o.color:'';
 var n=Number(o.radius);r.radius=(o.radius===null||o.radius===undefined||o.radius==='')?null:(isFinite(n)&&n>=0&&n<=32?Math.round(n):null);
 r.font=typeof o.font==='string'&&own(FONTS,o.font)?o.font:'';
 r.hero=['split','center','full','band'].indexOf(o.hero)>-1?o.hero:'';
 var img=function(u){return typeof u==='string'&&/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+\/=]+$/.test(u)&&u.length<4200000?u:''};
 r.logo=img(o.logo);r.heroImg=img(o.heroImg);r.step=Math.max(0,Math.min(4,parseInt(o.step,10)||0));return r;}
function dec(s){var b=atob(s.replace(/-/g,'+').replace(/_/g,'/'));return new TextDecoder().decode(Uint8Array.from(b,function(c){return c.charCodeAt(0)}))}
function enc(t){var u=new TextEncoder().encode(t),s='';u.forEach(function(c){s+=String.fromCharCode(c)});return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function load(){var m=location.hash.match(/^#v1=([A-Za-z0-9_-]+)$/);
 if(m){try{return clean(JSON.parse(dec(m[1])))}catch(e){}}
 try{var t=localStorage.getItem(KEY);if(t)return clean(JSON.parse(t))}catch(e){}return def();}
var S=load(),filter='alle',timer=null;
function save(){try{var c=JSON.parse(JSON.stringify(S));c.logo='';c.heroImg='';localStorage.setItem(KEY,JSON.stringify(c))}catch(e){}}
function shareUrl(){var c=JSON.parse(JSON.stringify(S));c.logo='';c.heroImg='';c.step=0;return location.origin+location.pathname+'#v1='+enc(JSON.stringify(c))}
function $(s,e){return (e||document).querySelector(s)}
function h(t,a){var e=document.createElement(t);a=a||{};for(var k in a){var v=a[k];if(v==null||v===false)continue;if(k==='text')e.textContent=v;else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?'':v)}
 for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null||c===false)continue;if(Array.isArray(c))c.forEach(function(x){e.appendChild(x)});else e.appendChild(typeof c==='string'?document.createTextNode(c):c)}return e}
var panel=$('#dz-panel'),frame=$('#dz-frame'),pv=$('#pv'),app=$('#dz-app');

function refresh(){clearTimeout(timer);timer=setTimeout(function(){
 var y=0;try{y=pv.contentWindow.scrollY||0}catch(e){}
 pv.onload=function(){try{pv.contentWindow.scrollTo(0,y)}catch(e){}};
 pv.srcdoc=buildPreview(S);},120)}
function changed(){save();refresh()}
function draw(){panel.replaceChildren(stepsBar(),[vInd,vDes,vFun,vInh,vFin][S.step](),navBtns());var cnt=$('#dz-count');if(cnt)cnt.textContent=S.feats.length}
function go(n){S.step=Math.max(0,Math.min(4,n));save();draw();panel.scrollTop=0}
function stepsBar(){return h('div',{class:'dz-steps',role:'tablist'},STEPS.map(function(t,i){return h('button',{type:'button',role:'tab','aria-selected':i===S.step?'true':'false',class:i===S.step?'on':(i<S.step?'done':''),onclick:function(){go(i)}},(i+1)+' '+t)}))}
function navBtns(){return h('div',{class:'dz-nav'},S.step>0?h('button',{class:'btn ghost',type:'button',text:'← Zurück',onclick:function(){go(S.step-1)}}):h('span'),S.step<4?h('button',{class:'btn',type:'button',text:'Weiter →',onclick:function(){go(S.step+1)}}):h('span'))}
function title(t,p){return [h('h2',{text:t}),h('p',{class:'dz-muted',text:p})]}

function setInd(k){S.ind=k;if(!S.ftouch)S.feats=IND[k].rec.slice();changed();draw()}
function vInd(){var g=h('div',{class:'opt-grid'});Object.keys(IND).forEach(function(k){g.appendChild(h('button',{type:'button',class:'opt'+(S.ind===k?' on':''),'aria-pressed':S.ind===k?'true':'false','data-ind':k,onclick:function(){setInd(k)}},h('span',{class:'ico',text:IND[k].e}),h('span',{text:IND[k].l})))});
 return h('div',{},title('Für welche Branche ist die Website?','Die Branche bestimmt die Beispieltexte und eine passende Empfehlung für Funktionen.'),g)}

function mini(d){var c=d.c;return h('div',{class:'mini',style:'background:'+c.bg},h('div',{class:'mh',style:'background:'+c.sf+';border-bottom:1px solid '+c.ln},h('i',{style:'background:'+c.pr}),h('b',{style:'background:'+c.ink})),h('div',{class:'mhero',style:'background:linear-gradient(135deg,'+c.pr+','+c.ac+')'}),h('div',{class:'mc'},[0,1,2].map(function(){return h('s',{style:'background:'+c.sf+';border:1px solid '+c.ln})})))}
function vDes(){var g=h('div',{class:'des-grid'});
 DES.filter(function(d){return filter==='alle'||d.t.indexOf(filter)>-1}).forEach(function(d){g.appendChild(h('button',{type:'button',class:'des'+(S.design===d.id?' on':''),'aria-pressed':S.design===d.id?'true':'false','data-des':d.id,onclick:function(){S.design=d.id;S.color='';S.radius=null;S.font='';S.hero='';changed();draw()}},mini(d),h('b',{text:d.n}),h('small',{text:d.d})))});
 return h('div',{},title('Welches Design gefällt Ihnen?','12 Designs zur Auswahl. Die Vorschau rechts zeigt Ihre Website sofort mit dem gewählten Design. Farben und Schrift passen Sie in Schritt 4 an.'),
  h('div',{class:'dz-chips'},FILTERS.map(function(f){return h('button',{type:'button',class:filter===f[0]?'on':'',text:f[1],onclick:function(){filter=f[0];draw()}})})),g)}

function toggleFeat(id){var i=S.feats.indexOf(id);if(i>-1)S.feats.splice(i,1);else S.feats.push(id);S.ftouch=true;changed();draw()}
function vFun(){var wrap=h('div',{}),groups=[];FEAT.forEach(function(f){if(groups.indexOf(f[3])<0)groups.push(f[3])});
 groups.forEach(function(g){var box=h('div',{class:'fgrp'},h('h3',{text:g}));FEAT.filter(function(f){return f[3]===g}).forEach(function(f){var on=S.feats.indexOf(f[0])>-1;
  box.appendChild(h('button',{type:'button',class:'feat'+(on?' on':''),role:'checkbox','aria-checked':on?'true':'false','data-feat':f[0],onclick:function(){toggleFeat(f[0])}},h('span',{class:'tick',text:on?'✓':''}),h('span',{},h('b',{text:f[1]}),h('small',{text:f[2]}))))});wrap.appendChild(box)});
 return h('div',{},title('Welche Funktionen soll die Website haben?','Schalten Sie Funktionen ein oder aus. Die Vorschau zeigt sie sofort. Es wird kein Preis berechnet; den Aufwand besprechen wir gemeinsam.'),
  h('div',{class:'row'},h('button',{class:'btn ghost',type:'button',text:'Empfehlung für „'+IND[S.ind].l+'“ übernehmen',onclick:function(){S.feats=IND[S.ind].rec.slice();S.ftouch=false;changed();draw()}}),h('span',{class:'dz-muted'},h('b',{id:'dz-count',text:String(S.feats.length)}),' ausgewählt')),wrap)}

function fld(label,val,on,o){o=o||{};var i=h(o.area?'textarea':'input',{type:o.type||'text',placeholder:o.ph||null,maxlength:o.max||null,'data-f':o.id||null});if(o.rows)i.rows=o.rows;i.value=val==null?'':val;i.addEventListener('input',function(){on(i.value)});return h('div',{class:'fld'},h('label',{},label),i)}
function upload(label,key,note){var inp=h('input',{type:'file',accept:'image/png,image/jpeg,image/webp'});
 inp.addEventListener('change',function(){var f=inp.files[0];if(!f)return;if(!/^image\/(png|jpeg|webp)$/.test(f.type)||f.size>3*1024*1024){alert('Bitte ein PNG-, JPG- oder WebP-Bild bis 3 MB wählen.');inp.value='';return}
  var r=new FileReader();r.onload=function(){S[key]=String(r.result);changed();draw()};r.readAsDataURL(f)});
 return h('div',{class:'fld'},h('label',{},label),inp,S[key]?h('button',{class:'btn ghost sm',type:'button',text:'Bild entfernen',onclick:function(){S[key]='';changed();draw()}}):null,h('small',{class:'dz-muted',text:note}))}
function vInh(){var D=designOf(S.design),I=IND[S.ind];
 var col=h('input',{type:'color','data-f':'color'});col.value=S.color||D.c.pr;col.addEventListener('input',function(){S.color=col.value;changed()});
 var rad=h('input',{type:'range',min:'0',max:'32','data-f':'radius'});rad.value=S.radius!=null?S.radius:D.r;rad.addEventListener('input',function(){S.radius=+rad.value;changed()});
 function sel(label,opts,val,on,id){var s=h('select',{'data-f':id},opts.map(function(o){return h('option',{value:o[0],text:o[1]})}));s.value=val;s.addEventListener('change',function(){on(s.value)});return h('div',{class:'fld'},h('label',{},label),s)}
 return h('div',{},title('Ihre Inhalte und Farben','Alles ist nur eine Vorschau. Bilder bleiben auf Ihrem Gerät und werden nirgends hochgeladen.'),
  fld('Firmenname',S.name,function(v){S.name=v;changed()},{ph:I.name,max:80,id:'name'}),fld('Slogan',S.tag,function(v){S.tag=v;changed()},{ph:I.tag,max:90,id:'tag'}),
  fld('Ort',S.city,function(v){S.city=v;changed()},{ph:'Ihre Stadt',max:80,id:'city'}),fld('Telefon',S.phone,function(v){S.phone=v;changed()},{ph:'0000 000000',max:80,id:'phone'}),fld('E-Mail',S.email,function(v){S.email=v;changed()},{ph:'info@ihre-domain.de',max:80,id:'email'}),
  h('div',{class:'fld'},h('label',{},'Hauptfarbe'),h('div',{class:'row'},col,h('button',{class:'btn ghost sm',type:'button',text:'Farbe des Designs',onclick:function(){S.color='';changed();draw()}}))),
  h('div',{class:'fld'},h('label',{},'Rundung der Ecken'),rad,h('button',{class:'btn ghost sm',type:'button',text:'Standard',onclick:function(){S.radius=null;changed();draw()}})),
  sel('Schriftstil',FONT_OPTS,S.font,function(v){S.font=v;changed()},'font'),sel('Aufbau des Kopfbereichs',HEROES,S.hero,function(v){S.hero=v;changed()},'hero'),
  upload('Logo (optional)','logo','Wird nur in der Vorschau angezeigt.'),upload('Titelbild (optional)','heroImg','Wird nur in der Vorschau angezeigt.'))}

function summary(share){var D=designOf(S.design),I=IND[S.ind],fs=S.feats.map(function(id){return FEAT.filter(function(f){return f[0]===id})[0][1]});
 var adj=[];if(S.color)adj.push('Farbe '+S.color);if(S.radius!=null)adj.push('Ecken '+S.radius+' px');if(S.font)adj.push('Schrift '+S.font);if(S.hero)adj.push('Kopfbereich '+S.hero);
 return ['Anfrage über den Website-Designer','Branche: '+I.l,'Design: '+D.n,'Firma: '+(S.name||'(noch offen)'),'Ort: '+(S.city||'–'),'Telefon: '+(S.phone||'–'),'E-Mail: '+(S.email||'–'),'Funktionen: '+(fs.join(', ')||'keine'),'Anpassungen: '+(adj.join(', ')||'keine'),share?'Vorschau-Link: '+shareUrl():''].filter(Boolean).join('\n')}
function copy(text,msg){(navigator.clipboard?navigator.clipboard.writeText(text):Promise.reject()).then(function(){toast(msg)},function(){prompt('Zum Kopieren markieren:',text)})}
function toast(m){var t=$('#dz-toast');t.textContent=m;t.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(function(){t.hidden=true},3200)}
function vFin(){var D=designOf(S.design),I=IND[S.ind],fs=S.feats.map(function(id){return FEAT.filter(function(f){return f[0]===id})[0][1]});
 return h('div',{},title('Ihre Auswahl im Überblick','Das ist eine grobe Vorstellung, kein verbindliches Angebot. Alles lässt sich später anpassen.'),
  h('div',{class:'sum'},h('div',{},h('b',{},'Branche'),I.l),h('div',{},h('b',{},'Design'),D.n),h('div',{},h('b',{},'Firma'),S.name||I.name+' (Beispiel)'),h('div',{},h('b',{},'Funktionen ('+fs.length+')'),fs.join(', ')||'keine')),
  h('div',{class:'dz-actions'},h('button',{class:'btn',type:'button','data-act':'send',text:'Unverbindlich anfragen',onclick:openSend}),h('button',{class:'btn ghost',type:'button',text:'Link zum Teilen kopieren',onclick:function(){copy(shareUrl(),'Link kopiert')}}),h('button',{class:'btn ghost',type:'button',text:'Auswahl als Text kopieren',onclick:function(){copy(summary(true),'Auswahl kopiert')}}),h('button',{class:'btn ghost',type:'button',text:'Neu starten',onclick:reset})),
  h('p',{class:'dz-muted small'},'Beim Absenden wird Ihre Auswahl mit Ihren Kontaktdaten an Freddy Hummel übermittelt. Mehr dazu in der ',h('a',{href:'/datenschutz.html',text:'Datenschutzerklärung'}),'.'))}
function reset(){if(!confirm('Alle Eingaben zurücksetzen?'))return;S=def();try{localStorage.removeItem(KEY)}catch(e){}history.replaceState(null,'',location.pathname);draw();changed()}

function openSend(){
 var f={name:'',email:'',phone:'',msg:summary(true),ok:false,hp:''};
 var status=h('p',{class:'dz-status',role:'status'}),chk=h('input',{type:'checkbox','data-f':'consent'}),hp=h('input',{type:'text',name:'hp',style:'display:none',tabindex:'-1',autocomplete:'off','aria-hidden':'true'});
 var sendBtn=h('button',{class:'btn',type:'button','data-act':'submit',text:'Anfrage senden'});
 var body=h('div',{},h('h2',{text:'Anfrage senden'}),fld('Name',f.name,function(v){f.name=v},{id:'m-name',max:100}),fld('E-Mail',f.email,function(v){f.email=v},{id:'m-mail',type:'email',max:150}),fld('Telefon (optional)',f.phone,function(v){f.phone=v},{id:'m-phone',max:40}),
  fld('Nachricht (mit Ihrer Auswahl)',f.msg,function(v){f.msg=v},{id:'m-msg',area:true,rows:8,max:3800}),hp,
  h('label',{class:'chk'},chk,h('span',{},'Ich habe die ',h('a',{href:'/datenschutz.html',target:'_blank',rel:'noopener',text:'Datenschutzerklärung'}),' gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden.')),status,h('div',{class:'row'},sendBtn,h('button',{class:'btn ghost',type:'button',text:'Abbrechen',onclick:close})));
 var ov=h('div',{class:'dz-ov',role:'dialog','aria-modal':'true'},h('div',{class:'dz-modal'},body));
 function close(){ov.remove();document.removeEventListener('keydown',esc)}function esc(e){if(e.key==='Escape')close()}document.addEventListener('keydown',esc);ov.addEventListener('click',function(e){if(e.target===ov)close()});
 sendBtn.addEventListener('click',function(){
  status.textContent='';if(!f.name.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())||f.msg.trim().length<5){status.textContent='Bitte Name, gültige E-Mail und Nachricht ausfüllen.';return}
  if(!chk.checked){status.textContent='Bitte bestätigen Sie die Datenschutzerklärung.';return}
  sendBtn.disabled=true;status.textContent='Wird gesendet …';
  fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:f.name.trim(),email:f.email.trim(),phone:f.phone.trim(),message:f.msg.trim(),hp:hp.value})})
   .then(function(r){if(r.ok){status.textContent='Danke! Ihre Anfrage wurde gesendet. Ich melde mich zeitnah.';sendBtn.hidden=true;return}
     if(r.status===400||r.status===429)return r.json().then(function(j){status.textContent=j.error||'Senden nicht möglich.';sendBtn.disabled=false});throw new Error('x')})
   .catch(function(){var href='mailto:freddyhummel.de@gmail.com?subject='+encodeURIComponent('Anfrage Website-Designer')+'&body='+encodeURIComponent('Name: '+f.name+'\nE-Mail: '+f.email+'\nTelefon: '+f.phone+'\n\n'+f.msg);status.replaceChildren(document.createTextNode('Senden hat nicht geklappt. '),h('a',{href:href,text:'Stattdessen per E-Mail-Programm senden'}));sendBtn.disabled=false});
 });
 document.body.appendChild(ov);setTimeout(function(){var i=$('[data-f="m-name"]',ov);if(i)i.focus()},50);
}

// Geräte-Umschalter, Vollbild, mobile Reiter
document.querySelectorAll('[data-device]').forEach(function(b){b.addEventListener('click',function(){frame.setAttribute('data-device',b.getAttribute('data-device'));document.querySelectorAll('[data-device]').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')})})});
$('#dz-open').addEventListener('click',function(){var u=URL.createObjectURL(new Blob([buildPreview(S)],{type:'text/html'}));window.open(u,'_blank','noopener');setTimeout(function(){URL.revokeObjectURL(u)},60000)});
document.querySelectorAll('[data-mtab]').forEach(function(b){b.addEventListener('click',function(){app.classList.toggle('pv',b.getAttribute('data-mtab')==='pv');document.querySelectorAll('[data-mtab]').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});if(b.getAttribute('data-mtab')==='pv')refresh()})});
draw();pv.srcdoc=buildPreview(S);
})();
