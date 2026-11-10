(()=>{const u='/api/testlab/data/demo/counter',n=document.getElementById('n');let c=0;
fetch(u,{credentials:'same-origin'}).then(r=>r.json()).then(d=>{c=d.value||0;n.textContent=c});
document.getElementById('inc').onclick=()=>{n.textContent=++c;fetch(u,{method:'PUT',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify({value:c})})};
document.getElementById('boom').onclick=()=>{throw new Error('Test-Fehler aus Demo-Feature')}})();
