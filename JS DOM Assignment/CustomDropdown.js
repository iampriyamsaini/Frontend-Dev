const dd=document.getElementById('dd'),btn=document.getElementById('ddBtn'),opts=document.getElementById('opts')
btn.addEventListener('click',e=>{opts.style.display=opts.style.display==='block'?'none':'block';e.stopPropagation()})
document.addEventListener('click',()=>{opts.style.display='none'},true)
opts.addEventListener('click',e=>{const t=e.target; if(t.tagName==='DIV'){btn.textContent=t.textContent;opts.style.display='none'}})