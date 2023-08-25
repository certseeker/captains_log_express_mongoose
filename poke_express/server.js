const express = require("express");

const app = express();

// INDECES

app.get("/" , (req , res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>")
})


app.get("/pokemon" , (req, res) => {
  res.render(
  )
})

app.listen(3000, () => {
  console.log("Listening on Port 3000")
})