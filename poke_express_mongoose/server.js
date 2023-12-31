require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//so jsx can be interpreted 
app.engine('jsx' , require('express-react-views').createEngine());


const methodOverride = require("method-override");

//connect Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const Pokemon = require('./models/Pokemon.js');

//use jsx
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//!add method override 2 r's
app.use(methodOverride('_method'));

//this allows inserted data on the browser or POST Requests, to be converted into a string so that json can recognize the input, and send back to the backend/database/mongodb
app.use(express.urlencoded({extended:false}));

const basePokeDex = [
  {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
  {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
  {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
  {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
  {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
  {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
  {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];

Pokemon.insertMany(basePokeDex)
.then((pokemon) => {
  console.log(pokemon)
})
.catch ((error) => {
  console.log(error)
})


app.get('/',  (req, res) => {
  res.send('<h1>Welcome to the PokeFiles!</h1>')
})



//INDUCES, Index, New, Delete, Update, Create, Edit, Show

//?Index: a collection of all the data from the database
app.get('/pokemon', (req, res) => {
  Pokemon.find({})
  .then((allPokemon) => {
    res.render('Index', {
      pokemon: allPokemon
    })
  })
  .catch(error => {
    console.error(error)
  })
})

//* lets break this all the way down
//* app.get('/pokemon', (req, res) => {
  //find all of the object
  //* Pokemon.find({})
  //then: its like saying after you find the Pokemon database and its object, THEEEEN you...
  //take the objects from the Pokemon database/file, and you create a new name for that data. This new name is in the parenthesis
    //* .then((allPokemon) => {
      //it will take the data from newly name cost allPokemon and render that onto the "Index" view file
      // *res.render('Index', {
      //   *pokemon: allPokemon
        //re.render takes 2 arguments
        //use the name of the new const here after pokemon
        //pokemon will be the PROP ex function Index(prop) {
          //ect, ect}. So if I want to pass on this info to the Index file, you just pokemon in the () after the function 
//       })
//     })
//*if the app catches an error, print the error into the terminal 
//     *.catch(error => {
//      * console.error(error)
//     })
// })

//? NEW: Being able to create a new element
app.get('/pokemon/new' , (req, res) => {
  res.render('New');
})



//? Delete....not sure where this button goes
app.delete('/pokemon/:id', (req, res)=>{
  Pokemon.deleteOne({_id: req.params.id})
  .then(info => {
      console.log(info)
      res.redirect('/pokemon')
  })
  // res.send('deleting...');
});

//?Update

//?Edit 

//?Create
app.post('/pokemon', (req, res) => {
  Pokemon.create(req.body)
  .then((createdPokemon) => {
    res.redirect('/pokemon')
  })
  .catch(error => {
    console.error(error)
  })
});

app.get('/pokemon/show/:id', (req, res) => {
  Pokemon.findOne({ _id: req.params.id })
    .then((foundPokemon) => {
      res.render('Show', {
        pokemon: foundPokemon
      })
    })
    .catch(error => {
      console.error(error)
    })
})

// app.get("/pokemon/show/:id" , (req, res) => {
//   res.render("Show" , {
//       pokemon: Pokemon[req.params._id]
//   });
// })


app.listen(8000, () => {
  console.log("Listening on Port 8000")
})