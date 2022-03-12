import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';

import './assets/css/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from 'store';

const store = createStore(combinedReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
