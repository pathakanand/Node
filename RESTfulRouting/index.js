const express=require('express');
const { url } = require('inspector');
const app=express();
let path=require('path');

let comments = [
    {
        id:0,
        username: "Akshay" ,
        comment: "kuch nhi"
    },
    {
        id:1,
        username: "Sachin" ,
        comment: "kaun"
    },
    {
        id:2,
        username: "Javed" ,
        comment: "laal hai"
    },
    {
        id:3,
        username: "Ojaswa" ,
        comment: "Puls aagyi puls"
    }
] 




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("<h2>hello ji, kaise ho</h2>")
})

app.get('/blogs',(req,res)=>{
    res.render('index',{comments});
})

app.get('/blog/new',(req,res)=>{
    res.render('new')
})

app.post('/blogs',(req,res)=>{
    let{username,comment}=req.body;
    comments.push({id:comments.length,username,comment})
    res.redirect('/blogs');
})

app.listen(8080,()=>{
    console.log('http://localhost:8080/');
})