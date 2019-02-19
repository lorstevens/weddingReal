import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Containers
import {HomeContainer} from './containers/HomeContainer'


const App = () =>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomeContainer} /> 
      </Switch>
    </div>
  </BrowserRouter>

export default App;