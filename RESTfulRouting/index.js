const express=require('express');
const { url } = require('inspector');
const app=express();
let path=require('path');
let methodOverride = require('method-override')
const { v4: uuid } = require('uuid');

let comments = [
    {
        // id:0,
        id:uuid(),
        username: "Akshay" ,
        comment: "kuch nhi"
    },
    {
        // id:1,
        id:uuid(),
        username: "Sachin" ,
        comment: "kaun"
    },
    {
        // id:2,
        id:uuid(),
        username: "Javed" ,
        comment: "laal hai"
    },
    {
        // id:3,
        id:uuid(),
        username: "Ojaswa" ,
        comment: "Puls aagyi puls"
    }
] 




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method')) 

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
    let{name,comment}=req.body;
    console.log(req.body);
    comments.push({id:comments.length,username:name,comment})
    res.redirect('/blogs');
})

app.get('/blogs/:id', (req, res) => {
    let { id } = req.params;
    let foundComment = comments.find(comment => comment.id == id);
    res.render('show', { foundComment }); 
});

app.get('/blogs/:id/edit',(req,res)=>{
    let {id}=req.params;
    let foundComment=comments.find(comment=> comment.id==id);
    res.render('Edit',{foundComment});
})

app.patch('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    let foundComment=comments.find(comment=> comment.id==id);
    let {comment}=req.body;
    foundComment.comment=comment;
    res.redirect('/blogs');
})

app.delete('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    let newArray=comments.filter((comment)=>{return comment.id!=id})
    comments=newArray;
    res.redirect('/blogs');
})

app.listen(8080,()=>{
    console.log('http://localhost:8080/');
})