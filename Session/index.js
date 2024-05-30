const express =require('express');
const app=express();
const session = require('express-session')


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))


  app.get('/',(req,res)=>{
    res.send('welcome');
  })

app.get('/viewCount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count=1;
    }
    res.send(`you visited site ${req.session.count} times`);
})

app.get('/setName',(req,res)=>{
    req.session.username='Anand Pathak';
    res.redirect('/greet');
})

app.get('/greet',(req,res)=>{
    let {username="anonymous"}=req.session;
    res.send(`hi from ${username}`);
})


app.listen(8080,()=>{
    console.log("https://localhost:8080");
})