const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// app.use(cookieParser());

app.use(cookieParser('A secret'));



app.get('/setsigndcookie',(req,res)=>{
    res.cookie('kaise ho','bindaas',{signed:true});
    res.send("signed cookie sent successfully");
})

app.get('/',(req,res)=>{
    res.send(req.signedCookies);
})

// app.get('/setcookie', (req, res) => {
//     res.cookie('mode', 'dark');
//     res.cookie('location', 'delhi');
//     res.cookie('username', 'pathakboyanand');
//     res.send("Server sent you cookies");
// });

// app.get('/getcookie', (req, res) => {
//     let { mode, location, username } = req.cookies;
//     res.send(`Hello ${username}, location is ${location}, mode used is ${mode}`);
// });

app.listen(8080, () => {
    console.log("Server connected at port 8080");
});
