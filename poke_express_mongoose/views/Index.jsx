const React = require('react');

const Index = ({pokemon}) => {
  // console.log(pokemon)
  return(
    <div>
      <div>
        <h1>PokeDex</h1>
        {/* //*After commenting out everything under h1, it seems to be an issue with my map, may need a key or this, not sure   */}
        <ul>
          {pokemon.map((pokelist, i) => {
          return (
              <a href={`/pokemon/${pokelist.i}`}>{pokelist.name}</a>
          )})}
        </ul>
      </div>
    </div>
  )
}

module.exports = Index;

//*Attempts to resolve
//!pokemon.map is not a function: {pokemon.map((pokelist, i)

//-changing the key, id, _id, i
//-not using this & using this
//-not using a key
//-using allpokemon as a prop and just rendering it in its own div
//-changing it from a regular funtion to an arrow function, no difference