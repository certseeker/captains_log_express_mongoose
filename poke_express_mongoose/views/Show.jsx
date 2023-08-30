// const React = require('react');


// class Show extends React.Component {
//   render() {
//     return (
//       <div>
//         {console.log("hello")}
//         { this.props.pokemon.name }
//       </div>
//     )
//   }
// }

// module.exports = Show








const React = require('react');

const Show = ({pokemon}) => {
  return(
    <div>
      <h1>Show Page</h1>
      {/* {console.log(pokemon)} */}
        <h2>You Chose: {pokemon.name}!<br/></h2>
        <img src={pokemon.img}></img><br/>
        <a href='/pokemon/'><button>Go Back</button></a>
    </div>
  )
}

module.exports = Show;