
let exp=require('express')
let app=exp();


app.get('/',(req,res)=>{
    console.log('request is made');

    res.send('<h1>root route</h1>')
})

// app.get('/cat',(req,res)=>{
//     console.log('request is made');

//     res.send('<h1>cat route</h1>')
// })
// app.get('/dog',(req,res)=>{
//     console.log('request is made');

//     res.send('<h1>dog route</h1>')
// })
// app.get('*',(req,res)=>{
//     console.log('request is made');

//     res.send('<h1>bad request</h1>')
// })



// path parameter


// app.get('/r/:subreddit',(req,res)=>{

//     console.log(req.params);
//     let {subreddit}=req.params;
//     console.log(subreddit);


//     res.send(`<h1>hello ${subreddit}</h1>`)
// })





// querry paerameter



// app.get('/search' , (req,res)=>{
//     // console.log(req);
//     console.log(req.query);
//     let  {bhagwaan , wife} = req.query;
//     res.send(`query paramter agya ${bhagwaan} and ${wife}`)
// })









app.listen(8080,()=>{
    console.log("server connected at port 8080");
})











