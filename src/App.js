import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Button from '@material-ui/core/Button';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      recipes: [],
      anyRecipeFound: true,
    }
    this.recipeCall = this.recipeCall.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      searchInput: e.target.value
    })
    console.log(this.state.searchInput);
  }

  async recipeCall() {
    try {
      const API_KEY = "0edbc557c96378697c37037a0e5b6fac"
      const response = await axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}`);
      console.log(response)
      const recipes = response.data.recipes;
      this.setState({
        recipes: recipes,
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.recipeCall();
  }
  render() {
    return (
      <div>
      <div className="container">

        <form >
          <input type="text" name="name" className="input-field" onChange={this.handleInput} />
        </form>
        <div className="submit-button">
          <Button variant="contained" color="primary" >
            Find Me Some Recipes!
          </Button>
        </div>
        <div className = "foundRecipes" >
          {
            this.state.recipes.map((recipe, index) =>
              <div key={index} className="individual-recipe">
                <img key={index} src={recipe['image_url']} alt="">
                </img>
                <p className ="individual-recipe">RECIPE DESCRIPTION GOES HERE</p>
              </div>
            )
          }
        </div>
      </div>
      </div>
    );
  }
}

export default App;
