const express = require('express')
const app = express()
const path=require('path');
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser');
const User=require('./Models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

mongoose.connect('mongodb://127.0.0.1:27017/auth-test')
  .then(() => console.log('Connected!'));



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get('/', (req, res)=>{
    res.render('index');
});


app.post('/register',(req,res)=>{
    let {username,email,password,age}=req.body;
    bcrypt.genSalt(10,function(err, salt) {
        bcrypt.hash(password, salt,async function(err, hash) {
            let registeredUser=await User.create({username,email,password:hash,age});
            res.send("user registration done!");
        });
    });

    let token=jwt.sign({email},"secret");
    res.cookie("token",token);
})


app.get('/login',(req,res)=>{
    res.render('login');
})


app.post('/login',async (req,res)=>{
    let user=await User.findOne({email:req.body.email});
    if(!user){
        res.send("oops!something went wrong");
    }
    bcrypt.compare(req.body.password,user.password,function (err, result){
        if(result){
            let token=jwt.sign({email:user.email},"secret");
            res.cookie("token",token);
            res.send("you are logged in!!");
        }
        else{
            res.send("oops! wrong password");
        }
    })
})


app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect('/');
})



app.listen(8080, () => {
    console.log(`app listening on port 8080!`);
});