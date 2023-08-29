const React = require('react');

const Show = ({pokemon}) => {
  return(
    <div>
      <h1>Show Page</h1>
        You chose: {pokemon.name} <br></br>
        {pokemon.img} <br></br>
        <a href='/pokemon/'><button>Go Back</button></a>
    </div>
  )
}

module.exports = Show;