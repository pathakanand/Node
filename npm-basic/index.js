// const giveMeAJoke = require('give-me-a-joke');

// let category = "blonde";

// giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
     // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
//     console.log(joke);
// });


// let fn = "Jackie";
// let ln = "Chan";
// giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
//     console.log(joke);
// });



// To get a random dad joke
// giveMeAJoke.getRandomDadJoke (function(joke) {

//     console.log(joke);

// });


const figlet=require('figlet');

const colors=require('colors');

figlet("PathakBoyAnand!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
  });