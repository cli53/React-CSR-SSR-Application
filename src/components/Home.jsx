import React, { Component } from 'react';
import Summary from './Summary.jsx';
import Namebox from './Namebox.jsx';
// import ErrorBoundary from './Error.jsx';


const Home = ( { name, addName, handleChange }) => [
    //  <ErrorBoundary>
      <Summary name={name} />,
      // </ErrorBoundary>,
      // <ErrorBoundary>
      <Namebox addName={addName} handleChange={handleChange} />
      // </ErrorBoundary>
    ];

export default Home;