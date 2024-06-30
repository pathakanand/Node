const exprees =require('express');
const app=exprees();
const bcrypt=require('bcrypt');


app.get('/',(req,res)=>{
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash("password",salt,function(err,hash){
            res.send("done");
            console.log(hash);
        });
    });
})


app.get('/check',(req,res)=>{
    bcrypt.compare("password", "$2b$10$B3nuXcKflk.mQeKMxp98BOnuhQasLrCiV2MjtZsPaehYE1B6Oia4O", function(err, result) {
        res.send("hi!");
        console.log("true");
    });
})












app.listen(8080,()=>{
    console.log("server connected at port 8080");
})