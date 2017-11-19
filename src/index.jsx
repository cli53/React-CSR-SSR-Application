import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate((
<BrowserRouter>
<App />
</BrowserRouter>
), document.getElementById('root'));