const React = require('react');

const New = () => {
  // console.log(pokemon)
  return(
    <div>
      <div>
        <h1>Add A Pokemon</h1>
          <form action='Index' method="POST">
            Name: <input type="text" name="name" /><br/>
            Insert Image URL: <input type="url" name="imageLink" /><br/>
            <input type="submit" name="" value="Add Pokemon" />
          </form>
      </div>
    </div>
  )
}

module.exports = New; 