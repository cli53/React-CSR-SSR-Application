import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from './client.js';



ReactDOM.render((
<Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
), document.getElementById('root'));