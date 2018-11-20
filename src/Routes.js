import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import App from './App';
import Recipe from './Recipe'

class Routes extends Component {
  render() {
    return (
     <BrowserRouter>
     <Switch>
         <Route exact path ="/" component = {App}/>
         <Route exact path ="/recipe" component = {Recipe}/>
     </Switch>
     </BrowserRouter>
    );
  }
}

export default Routes;
