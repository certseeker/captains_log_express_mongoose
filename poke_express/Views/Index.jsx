import React from "react";

// passing pokemon in a
function Index({pokemon}) {

  const overallStyle = {
    color: ""

  }
  // style={overallStyle}

  return(
    <div style={overallStyle}>
      <h1>See All That Pokemon!</h1>
        <ul>
          {pokemon.map((pokelist, i) => {
            return (
              // {pokelist}
              <li key={i}>

                <a href={`/pokemon/${i}`}>{pokelist.name}</a>
                {/* // this is if the images are on the main page */}
                {/* <img src={`${pokelist.img}.jpg`} alt={pokelist.name} /> */}
              </li>
            )
          })}
        </ul>
    </div>

  )
}
module.exports = Index;