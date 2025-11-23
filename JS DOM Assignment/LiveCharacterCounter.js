const ta=document.getElementById('ta')
const counter=document.getElementById('counter')
const reset=document.getElementById('reset')
const max=100
ta.addEventListener('keydown',e=>{const remaining=max-ta.value.length;if(remaining<=0&&e.key!=='Backspace'&&e.key!=='Delete'&&!(e.ctrlKey||e.metaKey)) e.preventDefault()})
ta.addEventListener('input',()=>{const rem=max-ta.value.length;counter.textContent=rem;counter.className='counter';if(rem<=0) counter.classList.add('red');else if(rem<=20) counter.classList.add('yellow')})
reset.addEventListener('click',()=>{ta.value='';counter.textContent=max;counter.className='counter'})