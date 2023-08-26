require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const methodOveride = require("method-override");

//connect Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})