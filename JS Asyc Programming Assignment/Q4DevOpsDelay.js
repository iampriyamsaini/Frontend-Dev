function serverA(){return new Promise((res,rej)=>{setTimeout(()=>Math.random()<0.9?res("Server A done"):rej("A failed"),2000)})}
function serverB(){return new Promise((res,rej)=>{setTimeout(()=>Math.random()<0.9?res("Server B done"):rej("B failed"),3000)})}
Promise.all([serverA(),serverB()])
.then(()=>console.log("Deployment completed for all servers"))
.catch(e=>console.log("Error:",e))
Promise.race([serverA(),serverB()])
.then(r=>console.log("Fastest response:",r))
.catch(e=>console.log("Error:",e))