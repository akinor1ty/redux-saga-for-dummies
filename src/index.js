import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './configureStore';
import App from './container';
import { Provider } from 'react-redux'

const store = configureStore();

ReactDOM.render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
);
