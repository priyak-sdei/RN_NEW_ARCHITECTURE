import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { initDB } from '../helpers/dbUtils';
import * as reducers from '../reducers';
export const storeObj = {};
const setup = () => {
  const reducer = combineReducers(reducers);
  const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });
  initDB(store);
  storeObj.store = store;
  return store;
};

export default setup;

// Store has all of the default middleware added, _plus_ the logger middleware
