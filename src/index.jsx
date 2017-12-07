import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer.js';

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(reducer, preloadedState)

ReactDOM.hydrate((
<Provider store={store} key={'provider'}>
<BrowserRouter key={'browser-router'}>
<App key={'app'}/>
</BrowserRouter>
</Provider>
), document.getElementById('root'));