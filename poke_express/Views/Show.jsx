import React from "react";


const Show = ({pokemon}) => {
  return(
    <div>
      <h1>Gotta Catch'Em All</h1>
        <h2>{pokemon.name}'s Poke Profile </h2>
        <img src={`${pokemon.img}.jpg`} alt={pokemon.name} />
        <a href={`/pokemon`}>BACK</a>
    </div>
  )
}
//!PLEEEEASE WATCH THE S on exports !!!!!
module.exports = Show; 