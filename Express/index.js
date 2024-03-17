const exp=require('express')//returns a function

const app=exp();//instance of the obj

// console.log(app);


app.listen(8080,()=>{
    console.log("server connected at Port 8080");
})
// port no, aknowledgement message