
(function(){
var idx=null,overlay=document.getElementById('ssg-search-overlay'),
input=document.getElementById('ssg-search-input'),
results=document.getElementById('ssg-search-results'),
btn=document.getElementById('ssg-search-btn'),active=-1,
lm=location.pathname.match(/^\/(en|fr|ar|bn|cs|de|es|ha|he|hi|id|it|ja|ko|nl|pl|pt|ro|ru|sv|th|tl|tr|uk|vi|yo|zh-tw|zh)\//),
lp=lm?'/'+lm[1]:'';
function load(){if(idx)return Promise.resolve();var sp=lm?'/'+lm[1]+'/search-index.json':'/search-index.json';return fetch(sp).then(function(r){return r.json()}).then(function(d){idx=d.entries||[]}).catch(function(){idx=[]})}
function open(){load().then(function(){overlay.classList.add('active');input.value='';results.innerHTML='';input.focus();active=-1})}
function close(){overlay.classList.remove('active');active=-1}
function highlight(text,q){if(!q)return esc(text);var re=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');return esc(text).replace(re,'<mark>$1</mark>')}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function snippet(content,q,len){len=len||150;if(!q)return esc(content.substring(0,len));var i=content.toLowerCase().indexOf(q.toLowerCase());if(i<0)return esc(content.substring(0,len));var s=Math.max(0,i-50),e=Math.min(content.length,i+len);var t=(s>0?'...':'')+content.substring(s,e)+(e<content.length?'...':'');return highlight(t,q)}
function search(q){if(!idx||!q){results.innerHTML='';return}q=q.trim();if(!q){results.innerHTML='';return}var ql=q.toLowerCase(),hits=[];
for(var i=0;i<idx.length&&hits.length<20;i++){var e=idx[i],s=0;if(e.title.toLowerCase().indexOf(ql)>=0)s+=10;if(e.content.toLowerCase().indexOf(ql)>=0)s+=5;for(var h=0;h<e.headings.length;h++){if(e.headings[h].toLowerCase().indexOf(ql)>=0){s+=3;break}}if(s>0)hits.push({entry:e,score:s})}
hits.sort(function(a,b){return b.score-a.score});
var sr=document.getElementById('ssg-sr-status');
if(!hits.length){results.innerHTML='<div class="ssg-no-results" role="status">No results for “&ldquo;\'+esc(q)+\'&rdquo;”</div>';if(sr)sr.textContent='No results found';return}
var html='';for(var j=0;j<hits.length;j++){var e=hits[j].entry;html+='<a class="ssg-result" href="'+esc(lp+e.url)+'">'+'<div class="ssg-result-title">'+highlight(e.title,q)+'</div>'+'<div class="ssg-result-snippet">'+snippet(e.content,q)+'</div></a>'}
results.innerHTML=html;active=-1;if(sr)sr.textContent=hits.length+' result'+(hits.length===1?'':'s')+' found'}
function nav(dir){var items=results.querySelectorAll('.ssg-result');if(!items.length)return;if(active>=0&&items[active])items[active].classList.remove('active');active+=dir;if(active<0)active=items.length-1;if(active>=items.length)active=0;items[active].classList.add('active');items[active].scrollIntoView({block:'nearest'})}
btn.addEventListener('click',function(){open()});
input.addEventListener('input',function(){search(this.value)});
overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();if(overlay.classList.contains('active'))close();else open()}
if(!overlay.classList.contains('active'))return;if(e.key==='Escape')close();if(e.key==='ArrowDown'){e.preventDefault();nav(1)}if(e.key==='ArrowUp'){e.preventDefault();nav(-1)}
if(e.key==='Enter'){e.preventDefault();var items=results.querySelectorAll('.ssg-result');if(active>=0&&items[active])window.location=items[active].href;else if(items[0])window.location=items[0].href}})
})();
