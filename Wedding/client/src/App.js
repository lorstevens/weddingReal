import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Containers
import {HomeContainer} from './containers/HomeContainer'
import {Success} from './containers/Success'


const App = () =>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomeContainer} /> 
        <Route path="/success" component={Success}/>
      </Switch>
    </div>
  </BrowserRouter>

export default App;