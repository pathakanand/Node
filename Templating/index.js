

let exp=require('express');
let app=exp();
let path=require('path');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'))


let rn= Math.floor(Math.random()*100);



app.get('/',(req,res)=>{

    console.log('request was made');


    res.render('app');
})


app.get('/random',(req,res)=>{
    
    console.log('request was made');


    res.render('random',{rn});

})


app.get('/star',(req,res)=>{
    console.log('request was made');



res.render('star')

})



app.listen(8080,()=>{
    console.log('server connected at port 8080');
})


























