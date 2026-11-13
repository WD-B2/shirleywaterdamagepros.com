(function(){
var mb=document.querySelector('.menu-toggle'),nl=document.getElementById('navlinks');
if(mb&&nl){mb.addEventListener('click',function(){var o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o?'true':'false');mb.textContent=o?'Close':'Menu';});}
document.querySelectorAll('.hasdrop>button').forEach(function(b){b.addEventListener('click',function(e){var li=b.parentNode;var o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.querySelectorAll('.hasdrop.open').forEach(function(l){l.classList.remove('open');});if(nl&&nl.classList.contains('open')){nl.classList.remove('open');if(mb){mb.setAttribute('aria-expanded','false');mb.textContent='Menu';}}}});
document.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var it=q.parentNode,a=it.querySelector('.faq-a');var open=it.classList.toggle('open');q.setAttribute('aria-expanded',open?'true':'false');a.style.maxHeight=open?a.scrollHeight+'px':'0px';});});
})();
