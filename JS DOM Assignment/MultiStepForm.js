const steps=[...document.querySelectorAll('.step')];let cur=0
const back=document.getElementById('back'),next=document.getElementById('next'),err=document.getElementById('err'),summary=document.getElementById('summary')
function show(){steps.forEach((s,i)=>s.classList.toggle('active',i===cur));back.disabled=cur===0;next.textContent=cur===steps.length-1?'Finish':'Next';err.textContent=''}
function valid(){if(cur===0){return document.getElementById('name').value.trim().length>0}if(cur===1){const v=document.getElementById('email').value;return v.includes('@')&&v.trim().length>3}if(cur===2){return document.getElementById('pwd').value.length>=6}}
next.addEventListener('click',()=>{if(!valid()){err.textContent='Please provide valid input for this step';return}if(cur<steps.length-1){cur++;show();}else{const n=document.getElementById('name').value;const e=document.getElementById('email').value;const p=document.getElementById('pwd').value;summary.style.display='block';summary.innerHTML=`<strong>Name:</strong> ${n}<br><strong>Email:</strong> ${e}<br><strong>Password:</strong> ${'*'.repeat(p.length)}`}}) 
back.addEventListener('click',()=>{if(cur>0) cur--;show()})
show()