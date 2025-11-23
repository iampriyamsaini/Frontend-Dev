const grid=document.getElementById('grid'),modal=document.getElementById('modal'),big=document.getElementById('big'),box=document.getElementById('box')
grid.addEventListener('click',e=>{const img=e.target.closest('img');if(!img) return;big.src=img.src.replace('/400/300','/800/600');modal.classList.remove('hidden')})
modal.addEventListener('click',()=>modal.classList.add('hidden'))
box.addEventListener('click',e=>e.stopPropagation())