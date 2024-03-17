let express=require('express');
let app=express();
let path=require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

// for using static files:
app.use(express.static(path.join(__dirname,'/public')));


app.get('/',(req,res)=>{

    console.log("request was made");

    res.render('index');
})




app.listen(8080,()=>{

    console.log('http://localhost:8080/');

})