function boilWater(){return new Promise((res,rej)=>{setTimeout(()=>Math.random()<0.9?res("Water boiled"):rej("Boiling failed"),1000)})}
function brewCoffee(){return new Promise((res,rej)=>{setTimeout(()=>Math.random()<0.9?res("Coffee brewed"):rej("Brewing failed"),1200)})}
function pourCoffee(){return new Promise((res,rej)=>{setTimeout(()=>Math.random()<0.9?res("Coffee poured"):rej("Pouring failed"),1500)})}
boilWater()
.then(r=>{console.log(r);return brewCoffee()})
.then(r=>{console.log(r);return pourCoffee()})
.then(r=>{console.log(r);console.log("Coffee ready for the team!")})
.catch(e=>console.log("Error:",e))