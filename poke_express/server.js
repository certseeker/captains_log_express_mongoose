const express = require("express");
const app = express();
//!this allows express/node to read the jsx files, if you don't this and have jsx, it will cause and error and not render page
app.set('view engine', "jsx");

//!DO NOT FORGET to put the () after createEngine !!!
app.engine('jsx' , require('express-react-views').createEngine());

const pokemon = require('./Models/pokemon.js')

// INDECES

app.get("/" , (req , res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>")
})



// just showing the data in json on the browser
// app.get("/pokemon" , (req, res) => {
//   res.send(pokemon)
// })

    //the first pokemon is what I am naming rn and the second refers to the item on the index list
app.get('/pokemon' , (req, res) => {
  // console.log(pokemon)
  res.render("Index" , {
    pokemon : pokemon
  });
});

//////SHOW
//name is from the key value
app.get('/pokemon/:num', (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  //test to see if it worked like this, and it did
  // res.send(pokemon[req.params.num] )
  res.render('Sight', {
      pokemon: pokemon[req.params.num]
  });

});

app.listen(3000, () => {
  console.log("Listening on Port 3000")
})