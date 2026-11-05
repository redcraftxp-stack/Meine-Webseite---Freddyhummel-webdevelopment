/* Lädt veröffentlichte Inhalte vom CMS. Fällt die Verbindung aus, bleibt der Text aus dem HTML stehen. */
(function(){
  var preview=/[?&]cms_preview=1/.test(location.search);
  function safe(u){u=String(u).trim();return !/^[a-z][a-z0-9+.-]*:/i.test(u)||/^(https?:|mailto:|tel:)/i.test(u);}
  fetch(preview?'/api/admin/content':'/api/content',{credentials:'same-origin',cache:'no-cache'})
    .then(function(r){return r.ok?r.json():null})
    .then(function(j){
      if(!j)return;
      var t=(preview?(j.draft&&j.draft.texts):j.texts)||{};
      document.querySelectorAll('[data-cms]').forEach(function(el){
        var k=el.getAttribute('data-cms');
        if(typeof t[k]==='string')el.textContent=t[k];
        if(el.tagName==='A'&&typeof t[k+'.href']==='string'&&safe(t[k+'.href']))el.setAttribute('href',t[k+'.href'].trim());
      });
      document.querySelectorAll('[data-cms-src]').forEach(function(el){
        var k=el.getAttribute('data-cms-src');
        if(typeof t[k+'.src']==='string'&&t[k+'.src'].trim()&&safe(t[k+'.src']))el.setAttribute('src',t[k+'.src'].trim());
        if(typeof t[k+'.alt']==='string')el.setAttribute('alt',t[k+'.alt']);
      });
      if(preview){var b=document.createElement('div');b.textContent='Vorschau – Entwurf, noch nicht veröffentlicht';
        b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:99;background:#a15c00;color:#fff;text-align:center;padding:6px;font:600 13px system-ui';document.body.appendChild(b);}
    }).catch(function(){});
})();
