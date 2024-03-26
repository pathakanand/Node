const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test')
.then(()=>{
    console.log("db connecteed successfully");
})
.catch((err)=>{
    console.log("db not connected");
    console.log(err);
})
