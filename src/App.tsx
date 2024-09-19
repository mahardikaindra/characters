import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './redux/reducers';
import Router from './router';
import Toast from 'react-native-toast-message';

const enhancer = compose(applyMiddleware(thunkMiddleware, logger));

const store = configureStore({
  reducer,
  enhancers: [enhancer],
});

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  );
};

export default App;
