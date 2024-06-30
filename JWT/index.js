const express=require('express');
const app=express();
const jwt = require('jsonwebtoken');
const cookieParser=require('cookie-parser');

app.use(cookieParser());


app.get('/',(req,res)=>{
    let token = jwt.sign({ email: 'anandpathak@gmail.com' }, 'secret');
    res.cookie("token",token);
    console.log(token);
    res.send("h1!");
})


app.get('/read',(req,res)=>{
    console.log(jwt.verify(req.cookies.token,"secret"));
    res.send("done!");
})




app.listen(8080,()=>{
    console.log("server connected at port 8080");
})