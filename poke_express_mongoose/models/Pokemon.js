//*this is the schema: like a blueprint for mongoDB to use, to collect and organize the data

//*mongoose is the middle man to MongoDB like how git is the middle man to Github
const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: false },
})

//*creating a model applies the methods to the schema so we can use CRUD [CREATE, READ, UPDATE, DELETE]

//*create a variable that will be used to call the data retrived from mongoDB in the form of a model. Synthax: you follow it by mongoose.model. The first argument in parenthesis is the name you will call the model, this is also the base name of the file (naming convention). The second argument is the name of the shema that you previously defined in this file. 

const Pokemon = mongoose.model('Pokemon' , pokemonSchema); 

//*once that is set, you export to use in the server.js file

module.exports = Pokemon; 

