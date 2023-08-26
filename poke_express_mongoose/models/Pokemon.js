//this is the schema

const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: false },
  
})