import React, { Component } from 'react';
import render from 'react-dom';
import { withRouter } from 'react-router-dom';
// import ErrorBoundary from './components/Error.jsx';
import { Routes } from './routes.jsx';
import { connect } from 'react-redux';
import addClick from './action.js'

class App extends Component {
  constructor(props){
    super(props)
    // this.state ={
    //   box: '',
    //   name: '',
    //   clicks: 0,
    // }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addName = this.addName.bind(this);
  }

  handleChange(event) {
    // this.setState({name: event.target.value})
  }

  handleClick() {
    // this.setState({
    //   clicks: ++this.state.clicks,
    // })
    this.props.dispatch(addClick())
    console.log(this.props.clicks)
  };

  addName(){
    // this.setState({
    //   box: this.state.name,
    // })
  }

  render(){
    return [
        <Routes
        addName={this.addName} 
        handleChange={this.handleChange} 
        // name={this.state.box}
        handleClick={this.handleClick}
        clicks={this.props.clicks} 
         />,
    ]
  }
}


 export default withRouter(connect(store => {
   return {
     clicks: store
   }
 })(App));

