
// Tiny progressive enhancement: active nav link + back-to-top helper
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href').endsWith(here)) a.classList.add('active');
  });
  const toTop = document.getElementById('toTop');
  if(toTop){
    window.addEventListener('scroll', ()=>{
      toTop.style.opacity = window.scrollY > 400 ? 1 : 0;
    });
  }
})();
