const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
    console.log("db successfully connected");
})
.catch((err)=>{
    console.log("db not connected");
    console.log(err);
})


const movieSchema= new mongoose.Schema({
    name:String,
    rating:Number,
    year:Number,
    isWatched:Boolean
})

const Movie=mongoose.model('Movie',movieSchema);

let ironman=new Movie({
    name:"ironMan",
    rating:8.9,
    year:2008,
    isWatched:true
})

ironman.save();

console.log(ironman);