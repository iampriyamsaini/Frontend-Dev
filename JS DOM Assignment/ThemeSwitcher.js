const set=(t)=>{document.body.setAttribute('data-theme',t);document.body.dataset.theme=t}
document.getElementById('light').addEventListener('click',()=>set('light'))
document.getElementById('dark').addEventListener('click',()=>set('dark'))
document.getElementById('blue').addEventListener('click',()=>set('blue'))