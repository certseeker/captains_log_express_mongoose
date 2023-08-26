const express = require("express");

const app = express();

// INDECES

app.get("/" , (req , res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>")
})

const pokemon = require('./pokemon.js')

// just showing the data in json on the browser
// app.get("/pokemon" , (req, res) => {
//   res.send(pokemon)
// })

app.get('pokemon' , (req, res) => {
  res.render("pokemon" , {
    pokemon : pokemon
  });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000")
})