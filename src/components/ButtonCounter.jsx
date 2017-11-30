import React, { Component } from 'react';
import { Button } from './Button.jsx';
// import ErrorBoundary from './Error.jsx';

export const ButtonCounter = ({ handleClick, clicks }) => 
      [
      // <ErrorBoundary>
      <Button
      onClick={handleClick}
      text={`You've clicked ${clicks} times!`}
      />
      // </ErrorBoundary>
      ]


