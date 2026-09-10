const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {checkAccess}=require('../landing/js/course-access.js');
(async()=>{
  let calls=0;
  const demo=await checkAccess({isDemo:()=>true,fetchSession:async()=>{calls++;throw new Error('not called');}});
  assert.deepEqual(demo,{allowed:true,demo:true});assert.equal(calls,0);
  assert.deepEqual(await checkAccess({isDemo:()=>false,staticDemoHost:()=>true,fetchSession:async()=>{throw new Error('not called');}}),{allowed:true,demo:true});
  assert.deepEqual(await checkAccess({isDemo:()=>false,fetchSession:async()=>({user:null})}),{allowed:false,reason:'login'});
  assert.deepEqual(await checkAccess({isDemo:()=>false,fetchSession:async()=>{throw new Error('offline');}}),{allowed:false,reason:'login'});
  assert.deepEqual(await checkAccess({isDemo:()=>false,fetchSession:async()=>({user:{role:'admin'}})}),{allowed:true,demo:false});
  const session=status=>async endpoint=>endpoint==='/api/auth/me'?{user:{role:'student'}}:{courses:[{slug:'ai-explorers',enrollment_status:status}]};
  assert.deepEqual(await checkAccess({isDemo:()=>false,fetchSession:session('active')}),{allowed:true,demo:false});
  assert.deepEqual(await checkAccess({isDemo:()=>false,fetchSession:session('pending')}),{allowed:false,reason:'enroll'});
  const root=path.resolve(__dirname,'../landing');
  const reader=fs.readFileSync(path.join(root,'course.html'),'utf8');
  assert.match(reader,/data-requires-course-access="true"/);assert.match(reader,/js\/course-access.js/);assert.match(reader,/js\/explorers.js/);
  assert.doesNotMatch(reader,/js\/course.js|js\/lesson-content.js/);
  const overview=JSON.parse(fs.readFileSync(path.join(root,'content/explorers/overview.json'),'utf8'));
  for(const lang of ['en','hy']){
    const book=JSON.parse(fs.readFileSync(path.join(root,`content/explorers/${lang}.json`),'utf8'));
    assert.equal(overview[lang].length,8);
    for(const s of overview[lang]){
      assert.ok(fs.existsSync(path.join(root,`assets/explorers/chapter-${s.id.padStart(2,'0')}.png`)));
      const target=book.sections.find(c=>c.id===s.id);assert.ok(target);
      assert.deepEqual(s.lessons.map(l=>l.id),target.lessons.map(l=>l.id));
      assert.equal(s.lessons.filter(l=>Number.isInteger(l.quiz)).length,s.id==='8'?0:1);
    }
  }
  console.log('PASS: explicit demo, signed out, offline, admin, active and pending enrollment; public-to-reader routes; bilingual chapter metadata.');
})().catch(e=>{console.error(e);process.exitCode=1;});
