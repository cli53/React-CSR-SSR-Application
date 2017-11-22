import React from 'react';
import ErrorBoundary from './Error.jsx'
import ButtonCounter from './ButtonCounter.jsx'

const About = () => [
  <p>This page is about SJC Server-Side Rendering</p>,
  <p>This is a button</p>,
  <ErrorBoundary>
  <ButtonCounter/>
  </ErrorBoundary>
]  

export default About;