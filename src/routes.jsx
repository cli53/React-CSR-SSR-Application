import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ErrorBoundary from './components/Error.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';



export const Routes = ({ addName, handleChange, name, handleClick, clicks}) => [
  <div className='headerNav'>
  {/* <ErrorBoundary> */}
  <Nav/>
  {/* </ErrorBoundary> */}
  <Switch>
    <Route exact path='/about' render={()=> <About handleClick={handleClick} clicks={clicks} />} />
    <Route exact path='/home' render={()=> <Home addName={addName} name={name} handleChange={handleChange} />} />
    <Route exact path='/' render={() => <h1>Potatoes Potate</h1>} />
  </Switch>
  </div>
]