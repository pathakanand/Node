const exp=require('express');

let app=exp();

// console.log(app);



// app.use('/cat',(req,res,next)=>{
//     console.log("request was made");
//     // console.log(req);
//     // console.log(res);
//     // console.log(next);
//     res.send('<h1>hey,i am response</h1>')
// })



app.use('/cat',(req,res,next)=>{
    console.log("request was made");

    res.send('<h1>Hi i am cat</h1>')
})


app.listen(8080,()=>{
    console.log("Server connected at port 8080");
})