import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import render from 'react-dom';
import ErrorBoundary from './components/Error.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

class App extends Component {

  render(){
    return [
        <div className='headerNav'>
        <ErrorBoundary>
        <Nav/>
        </ErrorBoundary>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/' render={() => <h1>Potatoes Potate</h1>} />
        </Switch>
        </div>
    ]
  }
}

export default App


