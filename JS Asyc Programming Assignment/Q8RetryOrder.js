function submitOrder(){return new Promise((res,rej)=>{setTimeout(()=>{Math.random()<0.5?res("Success"):rej("Failed")},500)})}
async function processOrder(){for(let i=1;i<=3;i++){try{await submitOrder();console.log("Attempt "+i+": Success");return}catch(e){console.log("Attempt "+i+": Failed")}}throw"Order could not be processed"}
(async()=>{try{await processOrder()}catch(e){console.log(e)}})()