/* ===== Einstellungen ===== */
var CFG={
  web3formsKey:'31495acc-b3e3-4b9d-b169-2f034629c560', // Access Key von web3forms.com hier einfügen (empfohlen)
  formEndpoint:'https://formsubmit.co/ajax/freddyhummel.de@gmail.com', // Empfänger der Anfragen
  botEndpoint:'/api/chat' // URL deines KI-Proxys (siehe worker.js); leer = Bot nutzt nur die eingebauten Antworten
};

/* Kontaktformular: sendet eine Mail an freddyhummel.de@gmail.com, Betreff "Anfrage Webseite" */
/* Kontaktformular: speichert Anfragen im CMS */
(function () {
  var f = document.getElementById('contact-form');
  if (!f) return;

  var msg = document.getElementById('form-msg');
  var btn = f.querySelector('button[type="submit"]');

  f.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (f.querySelector('[name="_honey"]').value) return;

    btn.disabled = true;
    msg.textContent = 'Wird gesendet …';

    try {
      const payload = {
        name: document.getElementById('c-name').value.trim(),
        email: document.getElementById('c-mail').value.trim(),
        phone: document.getElementById('c-tel').value.trim(),
        message: document.getElementById('c-msg').value.trim()
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Fehler beim Senden');
      }

      msg.textContent = 'Vielen Dank! Ihre Nachricht wurde gesendet.';
      f.reset();

    } catch (err) {
      console.error('Kontaktformular:', err);
      msg.textContent = err.message || 'Nachricht konnte nicht gesendet werden.';
    } finally {
      btn.disabled = false;
    }
  });
})();


/* Assistent: regelbasiert, läuft komplett im Browser (keine Datenübertragung) */
(function(){
  var MAIL='Freddyhummel.webdevelopment@gmail.com', TEL='+49 15562839021';
 var KB=[
  {
    k:['hallo','guten tag','moin','servus','hey'],
    a:'Hallo! Schön, dass Sie hier sind. Ich beantworte gerne Ihre Fragen rund um die Website-Erstellung. Was möchten Sie wissen?'
  },
  {
    k:['kost','preis','teuer','budget','günstig','kostenpunkt'],
    a:'Die Kosten einer Website hängen vom Umfang, der Anzahl der Seiten und den gewünschten Funktionen ab. Der Preis wird immer vor Beginn der Erstellung gemeinsam besprochen und verbindlich vereinbart. Sie wissen also vorher, welche Kosten auf Sie zukommen. <a href="index.html#kontakt">Jetzt unverbindlich anfragen</a>.'
  },
  {
    k:['bezahlen','zahlung','anzahlung','rechnung','bezahlung'],
    a:'Die Zahlungsbedingungen werden vor Beginn des Projekts gemeinsam vereinbart. Alle Kosten werden transparent besprochen, bevor die Umsetzung startet.'
  },
  {
    k:['dauer','lange','wann fertig','zeit','wochen','tage'],
    a:'Je nach Umfang dauert die Erstellung normalerweise einige Tage bis etwa eine Woche. Den genauen Zeitrahmen besprechen wir vor Beginn des Projekts.'
  },
  {
    k:['ablauf','schritte','zusammenarbeit','vorgehen','prozess'],
    a:'Die Zusammenarbeit läuft in vier Schritten ab: 1. Sie nehmen Kontakt auf. 2. Wir besprechen Ihre Wünsche und vereinbaren den Preis. 3. Ich erstelle Ihre Website. 4. Gemeinsam prüfen wir das Ergebnis und veröffentlichen die Website. <a href="index.html#ablauf">Mehr zum Ablauf</a>.'
  },
  {
    k:['preis enthalten','inklusive','enthalten','umfang'],
    a:'Der Leistungsumfang wird individuell vereinbart. Dazu können beispielsweise Design, technische Umsetzung, mobile Optimierung und Kontaktmöglichkeiten gehören. Sie erfahren vorab genau, was enthalten ist.'
  },
  {
    k:['selbst ändern','selbst pflegen','cms','bearbeiten','editor'],
    a:'Ja! Auf Wunsch kann ein Content-Management-System eingerichtet werden. Damit können Sie beispielsweise Texte und Bilder Ihrer Website selbst bearbeiten.'
  },
  {
    k:['text','bild','inhalt','material','foto','logo'],
    a:'Sie benötigen nicht unbedingt fertige Texte oder Bilder. Wir besprechen gemeinsam, welche Inhalte gebraucht werden und was Sie bereits haben.'
  },
  {
    k:['bestehend','übernehm','alte seite','umzug','relaunch','redesign'],
    a:'Ja, auch bestehende Websites können überarbeitet werden. Vorhandene Inhalte und Bilder können nach Absprache übernommen werden.'
  },
  {
    k:['google','seo','gefunden','suchmaschine','ranking'],
    a:'Ich achte auf eine saubere technische Grundlage für Suchmaschinen: passende Seitentitel, eine klare Struktur und schnelle Ladezeiten. Eine bestimmte Google-Platzierung kann allerdings nicht garantiert werden.'
  },
  {
    k:['leistung','angebot','was machen','was bieten','landingpage','website erstellen'],
    a:'Ich biete Website-Erstellung, Redesign bestehender Websites, Landingpages und SEO-Grundlagen für lokale Unternehmen und Selbstständige an.'
  },
  {
    k:['wartung','update','support','pflege','nach fertigstellung'],
    a:'Auch nach der Veröffentlichung können weitere Betreuung, Updates und Anpassungen vereinbart werden.'
  },
  {
    k:['außerhalb','ausserhalb','digital','remote','entfernung','göppingen','region','donzdorf'],
    a:'Ich bin im Raum Donzdorf und Göppingen tätig. Eine Zusammenarbeit ist aber auch vollständig digital möglich.'
  },
  {
    k:['wer','über freddy','freddy','person','team'],
    a:'Freddy Hummel aus Donzdorf entwickelt die Websites persönlich. Sie haben einen direkten Ansprechpartner während des gesamten Projekts.'
  },
  {
    k:['kontakt','telefon','anruf','nummer','mail','erreichen','adresse'],
    a:'Sie erreichen Freddy per E-Mail unter <a href="mailto:freddyhummel.webdevelopment@gmail.com">freddyhummel.webdevelopment@gmail.com</a> oder telefonisch unter <a href="tel:+4915562839021">+49 155 62839021</a>. <a href="index.html#kontakt">Zum Kontaktformular</a>.'
  },
  {
    k:['bewertung','rezension','referenz','erfahrung'],
    a:'Kundinnen und Kunden können unter <a href="index.html#rezensionen">Rezensionen</a> eine Bewertung hinterlassen.'
  },
  {
    k:['impressum','agb','geschäftsbedingung','datenschutz','dsgvo'],
    a:'Hier finden Sie die rechtlichen Informationen: <a href="impressum.html">Impressum</a>, <a href="agb.html">AGB</a> und <a href="datenschutz.html">Datenschutzerklärung</a>.'
  },
  {
    k:['danke','super','prima'],
    a:'Gern geschehen! Wenn Sie weitere Fragen haben, helfe ich Ihnen gerne weiter.'
  }
];
  var FLOW=[
   ['Aus welcher Branche kommt Ihr Unternehmen?','Branche'],
   ['Welches Ziel soll die Website haben (z. B. Anfragen, Termine, Information)?','Ziel'],
   ['Welche Inhalte gibt es schon (Texte, Logo, Bilder)?','Inhalte'],
   ['Welche Funktionen brauchen Sie (z. B. Kontaktformular, Galerie, Online-Buchung)?','Funktionen']
  ];
  var flow=null, answers=[];

  var fab=document.createElement('button'); fab.className='cb-fab'; fab.setAttribute('aria-label','Assistent öffnen');
  fab.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V5M9.5 5h5"/><circle cx="9" cy="13.5" r="1.2" fill="currentColor"/><circle cx="15" cy="13.5" r="1.2" fill="currentColor"/></svg>';
  var box=document.createElement('div'); box.className='cb'; box.setAttribute('role','dialog'); box.setAttribute('aria-label','Assistent');
  box.innerHTML='<div class="cb-h"><div><strong>Website-Assistent</strong><small>Automatische Antworten, kein Mensch</small></div><button aria-label="Schließen">×</button></div><div class="cb-m" aria-live="polite"></div><div class="chips"></div><form class="cb-f"><input placeholder="Ihre Frage …" aria-label="Ihre Frage" maxlength="200"><button class="btn sm" type="submit">Senden</button></form>';
  var chipsToggle=document.createElement('button');
chipsToggle.type='button';
chipsToggle.className='cb-chips-toggle';
chipsToggle.textContent='Häufige Fragen anzeigen ▼';

var chipsElement=box.querySelector('.chips');
chipsElement.hidden=true;
chipsElement.parentNode.insertBefore(chipsToggle,chipsElement);

chipsToggle.addEventListener('click',function(){
  var open=!chipsElement.hidden;
  chipsElement.hidden=open;
  chipsToggle.textContent=open
    ? 'Häufige Fragen anzeigen ▼'
    : 'Häufige Fragen ausblenden ▲';
});
  document.body.append(box,fab);
  if(CFG.botEndpoint) box.querySelector('small').textContent='KI-Assistent – Antworten können Fehler enthalten';
  var m=box.querySelector('.cb-m'), chips=box.querySelector('.chips'), inp=box.querySelector('input');

  function add(t,who,html){var d=document.createElement('div'); d.className='msg '+who; if(html) d.innerHTML=t; else d.textContent=t; m.appendChild(d); m.scrollTop=m.scrollHeight;}
  function setChips(a){chips.textContent=''; a.forEach(function(x){var b=document.createElement('button'); b.type='button'; b.textContent=x[0]; b.onclick=x[1]; chips.appendChild(b);});}
  function home(){
  setChips([
    ['💶 Was kostet eine Website?',function(){ask('Was kostet eine Website?')}],
    ['📋 Wie läuft die Zusammenarbeit ab?',function(){ask('Wie läuft die Zusammenarbeit ab?')}],
    ['⏱ Wie lange dauert es?',function(){ask('Wie lange dauert die Erstellung?')}],
    ['🛠 Welche Leistungen gibt es?',function(){ask('Welche Leistungen bietest du an?')}],
    ['✏️ Kann ich die Website selbst bearbeiten?',function(){ask('Kann ich meine Website selbst bearbeiten?')}],
    ['📞 Wie kann ich Kontakt aufnehmen?',function(){ask('Wie kann ich Kontakt aufnehmen?')}]
  ]);
}
  function reply(q){
    var t=' '+q.toLowerCase()+' ', best=null, bs=0;
    KB.forEach(function(e){var s=0; e.k.forEach(function(w){if(t.indexOf(w)>-1)s++}); if(s>bs){bs=s;best=e}});
    return best?best.a:'Dazu habe ich keine passende Antwort. Fragen Sie Freddy direkt: <a href="mailto:'+MAIL+'">'+MAIL+'</a> oder <a href="tel:+4915562839021">'+TEL+'</a>.';
  }
  function findFixedAnswer(q){
  var t=' '+q.toLowerCase()+' ';
  var best=null;
  var bs=0;
  KB.forEach(function(e){
    var score=0;
    e.k.forEach(function(w){
      if(t.indexOf(w)>-1) score++;
    });
    if(score>bs){
      bs=score;
      best=e;
    }
  });
  return best ? best.a : null;
}
  var hist=[];
  function aiReply(q){
    hist.push({role:'user',content:q});
    var d=document.createElement('div'); d.className='msg bot'; d.style.whiteSpace='pre-wrap'; d.textContent='…'; m.appendChild(d); m.scrollTop=m.scrollHeight;
    fetch(CFG.botEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:hist.slice(-8)})})
      .then(function(r){if(!r.ok)throw 0;return r.json()})
      .then(function(j){var t=(typeof j.reply==='string'?j.reply:'').trim(); if(!t)throw 0; hist.push({role:'assistant',content:t}); d.textContent=t; m.scrollTop=m.scrollHeight;})
      .catch(function(){hist.pop(); d.style.whiteSpace=''; d.innerHTML=reply(q);});
  }
  function ask(q){
    add(q,'me');
    if(flow!==null){
      if(/abbrech/i.test(q)){flow=null; add('Alles klar, abgebrochen.','bot'); home(); return;}
      answers.push(q); flow++;
      if(flow<FLOW.length){add(FLOW[flow][0],'bot'); return;}
      var sum=FLOW.map(function(f,i){return f[1]+': '+answers[i]}).join('\n');
      var href='mailto:'+MAIL+'?subject='+encodeURIComponent('Websiteanfrage')+'&body='+encodeURIComponent('Hallo Freddy,\n\nich interessiere mich für eine Website.\n\n'+sum);
      add('Danke! Das ist die Grundlage für ein Angebot. <a href="'+href+'">Zusammenfassung per E-Mail senden</a> oder <a href="index.html#kontakt">Kontaktformular nutzen</a>.','bot',true);
      flow=null; home(); return;
    }
  var fixedAnswer=findFixedAnswer(q);

if(fixedAnswer){
  add(fixedAnswer,'bot',true);
}else if(CFG.botEndpoint){
  aiReply(q);
}else{
  setTimeout(function(){add(reply(q),'bot',true)},250);
}
  }
  function open(){box.classList.add('open'); inp.focus();}
  function startFlow(){open(); flow=0; answers=[]; add('Gern! Vier kurze Fragen, dann haben Sie eine Zusammenfassung für ein Angebot. Mit „abbrechen“ beenden Sie das jederzeit.','bot'); add(FLOW[0][0],'bot'); chips.textContent='';}
  function toggle(){box.classList.contains('open')?box.classList.remove('open'):open();}
  fab.onclick=toggle; box.querySelector('.cb-h button').onclick=toggle;
  box.querySelector('form').onsubmit=function(e){e.preventDefault(); var v=inp.value.trim(); if(!v)return; inp.value=''; ask(v);};
  document.querySelectorAll('[data-open-bot]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault(); startFlow();})});
  add('Hallo! Ich beantworte Fragen zu dieser Website. Ich bin ein automatischer Assistent, keine Person.','bot'); home();
})();
document.addEventListener('DOMContentLoaded', function () {
  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');

  async function loadReviews() {
    if (!reviewList) return;

    try {
      const res = await fetch('/api/reviews', { cache: 'no-store' });

      if (!res.ok) {
        throw new Error('Rezensionen konnten nicht geladen werden');
      }

      const data = await res.json();
      const reviews = Array.isArray(data.reviews) ? data.reviews : [];

      reviewList.replaceChildren();

      if (!reviews.length) {
        reviewList.textContent = 'Noch keine veröffentlichten Rezensionen.';
        return;
      }

      reviews.forEach(function (r) {
        const card = document.createElement('div');
        card.className = 'card';

        const name = document.createElement('strong');
        name.textContent = r.name || 'Kunde';

        const stars = document.createElement('div');
        stars.className = 'stars';

        const rating = Math.max(1, Math.min(5, Number(r.rating) || 5));
        stars.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);

        const text = document.createElement('p');
        text.textContent = r.text || '';

        card.append(name, stars, text);
        reviewList.appendChild(card);
      });

    } catch (err) {
      console.error('Rezensionen laden:', err);
      reviewList.textContent = 'Rezensionen konnten gerade nicht geladen werden.';
    }
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const btn = reviewForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Wird gesendet …';

      try {
        const payload = {
          name: document.getElementById('r-name').value.trim(),
          rating: Number(document.getElementById('r-rating').value),
          text: document.getElementById('r-text').value.trim()
        };

        const res = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Fehler beim Senden');
        }

        reviewForm.reset();

        alert('Vielen Dank! Deine Bewertung wurde gesendet und wird nach Prüfung veröffentlicht.');

      } catch (err) {
        console.error('Bewertung senden:', err);
        alert(err.message || 'Die Bewertung konnte nicht gesendet werden.');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Bewertung absenden';
      }
    });
  }

  loadReviews();
});
