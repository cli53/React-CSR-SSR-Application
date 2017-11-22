import React, { Component } from 'react';
import Button from './Button.jsx';
import ErrorBoundary from './Error.jsx';

class ButtonCounter extends Component {
  constructor(){
    super()
    this.state = {
      clicks: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      click: ++this.state.clicks,
    })
  };

  render(){
    return [
      <ErrorBoundary>
      <Button
      onClick={this.handleClick}
      text={`You've clicked ${this.state.clicks} times!`}
      />
      </ErrorBoundary>
    ]
  }
};

module.exports = ButtonCounter