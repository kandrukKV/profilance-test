import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {loadNewsAction} from './store/actions'
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import {reducer} from './store/reducer';

const store = createStore(reducer);

store.dispatch(loadNewsAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
