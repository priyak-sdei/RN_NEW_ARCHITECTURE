import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import * as reducers from '../reducers';

const setup = () => {
  const reducer = combineReducers(reducers);
  const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });
  return store;
};

export default setup;

// Store has all of the default middleware added, _plus_ the logger middleware
