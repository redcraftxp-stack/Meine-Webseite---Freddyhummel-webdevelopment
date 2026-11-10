// Scannt testlab/features/*/feature.json und erzeugt testlab/registry.json
import {readdirSync,readFileSync,writeFileSync,statSync,existsSync} from 'node:fs';
import {execSync} from 'node:child_process';
const dir='testlab/features',out=[];
for(const d of readdirSync(dir,{withFileTypes:true})){
  if(!d.isDirectory())continue;
  const id=d.name,f=`${dir}/${id}/feature.json`,skip=m=>console.warn(`[testlab] übersprungen: ${id} (${m})`);
  if(!/^[a-z0-9_-]+$/i.test(id)){skip('ungültiger Ordnername');continue}
  if(!existsSync(f)){skip('feature.json fehlt');continue}
  let j;try{j=JSON.parse(readFileSync(f,'utf8'))}catch{skip('ungültiges JSON');continue}
  const entry=String(j.entry||'index.html');
  if(entry.includes('..')||entry.startsWith('/')||!existsSync(`${dir}/${id}/${entry}`)){skip('entry ungültig');continue}
  let added=0;
  try{added=1000*Number(execSync(`git log --diff-filter=A --format=%ct -- "${f}"`,{stdio:['ignore','pipe','ignore']}).toString().trim().split('\n').pop())}catch{}
  if(!added){const s=statSync(f);added=s.birthtimeMs||s.mtimeMs}
  out.push({id,name:j.name||id,description:j.description||'',category:j.category||'Sonstiges',icon:j.icon||'🧪',
    version:j.version||'0.0.0',entry,enabled:j.enabled!==false,status:j.status||'',
    preview:j.preview&&!String(j.preview).includes('..')?j.preview:'',added:Math.round(added)});
}
writeFileSync('testlab/registry.json',JSON.stringify({generated:Date.now(),features:out},null,2));
console.log(`[testlab] ${out.length} Feature(s) erkannt`);
