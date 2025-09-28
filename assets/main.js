// Simple JS: mobile nav toggle and set copyright year
document.addEventListener('DOMContentLoaded', function(){
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  var navToggle = document.getElementById('nav-toggle');
  if(navToggle){
    navToggle.addEventListener('click', function(){ document.querySelector('nav').classList.toggle('open') });
  }
});