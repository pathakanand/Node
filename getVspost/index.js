const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))//middleware to get the form data

//app.use(express.json()) for json file

app.get('/',(req,res)=>{
    console.log("req was made");
    res.render('index');
})

app.get('/get',(req,res)=>{
    console.log("req was made");
    res.render('app');
})

app.get('/post',(req,res)=>{
    console.log("req was made");
    res.render('common');
})


app.get('/user',(req,res)=>{

    console.log(req.query);
    res.send('get request sent successfully')
})


app.post('/user',(req,res)=>{

    console.log(req.body);
    res.send('post request sent successfully')
})






app.listen(8080,()=>{

    console.log('http://localhost:8080/');
})
