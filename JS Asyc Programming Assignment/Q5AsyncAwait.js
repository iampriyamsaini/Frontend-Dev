function stage(name){return new Promise(res=>setTimeout(()=>{console.log(name);res()},1000))}
async function runPipeline(){await stage("Design");await stage("Build");await stage("Test");await stage("Deploy");await stage("Celebrate")}
runPipeline()