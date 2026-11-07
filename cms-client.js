/* Lädt veröffentlichte Inhalte vom CMS. Fällt die Verbindung aus, bleibt der Text aus dem HTML stehen. */
(function(){
  var preview=/[?&]cms_preview=1/.test(location.search);

  function safe(u){
    u=String(u).trim();
    return u.length<=500&&u.indexOf('//')!==0&&(!/^[a-z][a-z0-9+.-]*:/i.test(u)||/^(https?:|mailto:|tel:)/i.test(u));
  }

  function j(url){
    return fetch(url,{credentials:'same-origin',cache:'no-cache'})
      .then(function(r){return r.ok?r.json():null})
      .catch(function(){return null});
  }

  /* Deutsche Sprachversion erkennen */
  var path=location.pathname.replace(/\/+$/,'')||'/';

  var KEY={
    '/':'home',
    '/index.html':'home',

    '/de':'home',
    '/de/index.html':'home',

    '/impressum.html':'impressum',
    '/datenschutz.html':'datenschutz',
    '/agb.html':'agb',

    '/de/impressum.html':'impressum',
    '/de/datenschutz.html':'datenschutz',
    '/de/agb.html':'agb'
  }[path]||'';

  if(path==='/de'||path.indexOf('/de/')===0){
    document.documentElement.lang='de';
  }

  function meta(sel,attr,val){
    var m=document.querySelector(sel);

    if(!m){
      m=document.createElement(sel.indexOf('link')===0?'link':'meta');
      var mt=sel.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
      if(mt)m.setAttribute(mt[1],mt[2]);
      document.head.appendChild(m);
    }

    m.setAttribute(attr,val);
  }

  function para(root,text){
    text.split(/\n{2,}/).forEach(function(b){
      b=b.trim();
      if(!b)return;

      var lines=b.split('\n');

      if(lines.every(function(l){return /^-\s/.test(l)})){
        var ul=document.createElement('ul');

        lines.forEach(function(l){
          var li=document.createElement('li');
          li.textContent=l.replace(/^-\s+/,'');
          ul.appendChild(li);
        });

        root.appendChild(ul);
      }else{
        var p=document.createElement('p');

        lines.forEach(function(l,i){
          if(i)p.appendChild(document.createElement('br'));
          p.appendChild(document.createTextNode(l));
        });

        root.appendChild(p);
      }
    });
  }

  Promise.all([
    j('/api/content'),
    preview?j('/api/admin/doc/site'):null
  ]).then(function(r){

    var b=r[0];
    if(!b)return;

    var t=(preview&&r[1]&&r[1].draft&&r[1].draft.texts)||b.texts||{};
    var s=b.settings||{};
    var c=s.contact||{};
    var seo=b.seo||{};
    var des=b.design||{};

    /* CMS-Texte einsetzen */
    document.querySelectorAll('[data-cms]').forEach(function(el){
      var k=el.getAttribute('data-cms');

      if(typeof t[k]==='string')el.textContent=t[k];

      if(el.tagName==='A'&&typeof t[k+'.href']==='string'&&safe(t[k+'.href'])){
        el.setAttribute('href',t[k+'.href'].trim());
      }
    });

    /* CMS-Bilder einsetzen */
    document.querySelectorAll('[data-cms-src]').forEach(function(el){
      var k=el.getAttribute('data-cms-src');
      var v=t[k+'.src']||(k==='header.logo'?des.logo:'');

      if(typeof v==='string'&&v.trim()&&safe(v)){
        el.setAttribute('src',v.trim());
      }

      if(typeof t[k+'.alt']==='string'){
        el.setAttribute('alt',t[k+'.alt']);
      }
    });

    /* Kontaktdaten einsetzen */
    document.querySelectorAll('[data-site]').forEach(function(el){
      var k=el.getAttribute('data-site');
      var v=c[k];

      if(!v)return;

      el.textContent=v;

      if(el.tagName==='A'){
        el.setAttribute(
          'href',
          k==='phone'
            ?'tel:'+v.replace(/[^+\d]/g,'')
            :k==='email'
              ?'mailto:'+v
              :el.getAttribute('href')
        );
      }
    });

    /* Social-Media-Links */
    var soc=document.getElementById('social');

    if(soc&&s.social){
      var ul=document.createElement('ul');

      Object.keys(s.social).forEach(function(k){
        var u=s.social[k];

        if(!/^https:\/\//i.test(u))return;

        var li=document.createElement('li');
        var a=document.createElement('a');

        a.href=u;
        a.target='_blank';
        a.rel='noopener noreferrer';
        a.textContent=k.charAt(0).toUpperCase()+k.slice(1);

        li.appendChild(a);
        ul.appendChild(li);
      });

      if(ul.children.length){
        soc.replaceChildren(ul);
        soc.hidden=false;
      }
    }

    /* Zusätzliche Links */
    (s.extraLinks||[]).forEach(function(l){
      if(!safe(l.url))return;

      var a=document.createElement('a');
      a.href=l.url;
      a.textContent=l.label;

      if(l.where==='header'){
        var nu=document.querySelector('header nav ul');

        if(nu){
          var li=document.createElement('li');
          li.appendChild(a);
          nu.appendChild(li);
        }
      }else{
        var f=document.querySelector('.legal span:last-child');
        if(f)f.appendChild(a);
      }
    });

    /* Favicon */
    if(des.favicon&&safe(des.favicon)){
      document.querySelectorAll('link[rel~="icon"]').forEach(function(l){
        l.setAttribute('href',des.favicon);
        l.removeAttribute('sizes');
      });
    }

    /* SEO-Einstellungen */
    var p=(seo.pages&&KEY&&seo.pages[KEY])||{};

    if(seo.robots==='noindex'||p.robots==='noindex'){
      meta('meta[name="robots"]','content','noindex, nofollow');
    }else if(p.robots==='index'){
      meta('meta[name="robots"]','content','index, follow');
    }

    if(p.title){
      document.title=p.title;
      meta('meta[property="og:title"]','content',p.title);
    }

    var desc=p.description||(KEY==='home'?seo.defaultDescription:'');

    if(desc){
      meta('meta[name="description"]','content',desc);
      meta('meta[property="og:description"]','content',desc);
    }

    var og=p.ogImage||seo.ogImage;

    if(og&&safe(og)){
      meta('meta[property="og:image"]','content',og);
    }

    if(p.canonical&&safe(p.canonical)){
      meta('link[rel="canonical"]','href',p.canonical);
    }

    /* CMS-Vorschaubalken */
    if(preview){
      var bn=document.createElement('div');

      bn.textContent='Vorschau – Entwurf, noch nicht veröffentlicht';

      bn.style.cssText='position:fixed;top:0;left:0;right:0;z-index:99;background:#a15c00;color:#fff;text-align:center;padding:6px;font:600 13px system-ui';

      document.body.appendChild(bn);
    }
  });

  /* Bilder verzögert laden */
  document.querySelectorAll('img').forEach(function(i){
    if(!i.closest('.hero')&&!i.closest('.logo')){
      i.loading='lazy';
    }
  });

  /* Rechtliche Seiten aus dem CMS laden */
  var L=document.querySelector('main[data-legal]');

  if(L){
    var n=L.getAttribute('data-legal');

    (preview
      ?j('/api/admin/doc/legal_'+n).then(function(x){
          return x&&x.draft;
        })
      :j('/api/legal/'+n)
    ).then(function(d){

      if(!d||!d.sections||!d.sections.length)return;

      var h1=L.querySelector('h1');

      L.replaceChildren();

      if(h1)L.appendChild(h1);

      d.sections.forEach(function(sc){
        if(sc.title){
          var h=document.createElement('h2');
          h.textContent=sc.title;
          L.appendChild(h);
        }

        para(L,sc.body||'');
      });
    });
  }

})();
