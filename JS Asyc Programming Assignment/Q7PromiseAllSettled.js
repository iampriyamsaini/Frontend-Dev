function loadProfile(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.8?res("Profile Loaded"):rej("Profile Failed"),2000))}
function loadPosts(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.8?res("Posts Loaded"):rej("Posts Failed"),1500))}
function loadMessages(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.8?res("Messages Loaded"):rej("Messages Failed"),1000))}
const t=Date.now()
Promise.allSettled([loadProfile(),loadPosts(),loadMessages()]).then(r=>{console.log(r);console.log("Total time:",Date.now()-t,"ms")})