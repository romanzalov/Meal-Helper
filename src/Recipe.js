import React, { Component } from 'react';
import './App.css';

class Routes extends Component {
  render() {
    return (
        <div>
        <h1>THIS IS THE INDIVIDUAL RECIPE PAGE</h1>
        <button onClick = {(props) => {this.props.history.push('/')}}>CLICK ME TO GO BACK TO THE HOMEPAGE</button>
        </div>
    );
  }
}

export default Routes;
