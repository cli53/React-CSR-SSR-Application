import React, { Component } from 'react';
import Summary from './Summary.jsx';
import Namebox from './Namebox.jsx';
import ErrorBoundary from './Error.jsx';


class Home extends Component {
  constructor(){
    super()
    this.state ={
      box: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addName = this.addName.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  addName(){
    this.setState({
      box: this.state.name,
    })
  }
  render() {
    return [
     <ErrorBoundary>
      <Summary name={this.state.box} />
      </ErrorBoundary>,
      <ErrorBoundary>
      <Namebox addName={this.addName} handleChange={this.handleChange} />
      </ErrorBoundary>
    ]
  }

}

export default Home;