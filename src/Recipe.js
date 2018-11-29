import React, { Component } from 'react';
import './App.css';

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes:[],
    }
  }

  componentDidMount () {
    this.setState({
      recipes: this.props.location.state
    });
  }
  render() {
    return (
        <div>
        <h1>THIS IS THE INDIVIDUAL RECIPE PAGE</h1>
        <button onClick = {(props) => {this.props.history.push('/')}}>CLICK ME TO GO BACK TO THE HOMEPAGE</button>
        {this.props.recipes}
        </div>
    );
  }
}

export default Recipe;
