function getBugs(){return new Promise((res,rej)=>{setTimeout(()=>{if(Math.random()<0.8)res(["UI glitch","API timeout","Login failure"]);else rej("API failed")},1000)})}
getBugs()
.then(b=>console.table(b))
.catch(e=>console.log("Error:",e))