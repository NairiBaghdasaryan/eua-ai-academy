/* Existing platform session / explicitly selected static demo.
 * This is a navigation gate, NOT security for publicly hosted JSON files.
 * Private course delivery requires server-side authorization and private assets.
 */
(function () {
  'use strict';
  async function checkAccess({fetchSession, isDemo}) {
    if (isDemo()) return {allowed:true, demo:true};
    try {
      const session = await fetchSession('/api/auth/me');
      if (!session.user) return {allowed:false, reason:'login'};
      if (session.user.role === 'admin') return {allowed:true, demo:false};
      const profile = await fetchSession('/api/profile');
      if (profile.courses?.some(c=>c.slug==='ai-explorers'&&c.enrollment_status==='active')) return {allowed:true, demo:false};
      return {allowed:false, reason:'enroll'};
    } catch (_) { return {allowed:false, reason:'login'}; }
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {checkAccess};
  if (typeof document === 'undefined') return;
  window.EuaCourseAccess = checkAccess({
    isDemo:()=>{try{return sessionStorage.getItem('eua-demo')==='1';}catch(_){return false;}},
    fetchSession:async path=>{
      const response=await fetch(path,{credentials:'same-origin',headers:{Accept:'application/json'}});
      if(!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Session unavailable');
      return response.json();
    }
  }).then(result=>{
    if(!result.allowed){
      const next='course.html'+location.search;
      location.replace(result.reason==='enroll'?'dashboard.html':'login.html?return='+encodeURIComponent(next));
    }
    return result;
  });
}());
