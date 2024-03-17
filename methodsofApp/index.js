const exp=require('express');
let app=exp();


app.get('/',(req,res)=>{
    console.log("request was made");

    res.send("<h1>hello ji</h1>")
})

app.get('/cat',(req,res)=>{
    console.log("request was made");

    res.send("hi");
})



//always at last 

app.get('*',(req,res)=>{
    console.log("request was made");


    res.send("bad request");
})

app.listen(8080,()=>{
    console.log("server connected at port 8080");
})

