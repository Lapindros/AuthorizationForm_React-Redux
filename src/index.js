import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './createStore';
import AppStartComponent from "./components/app/appStartComponent";

ReactDOM.render(
  <Provider store={store}>
    <AppStartComponent/>
  </Provider>,
  document.getElementById('root'),
);
