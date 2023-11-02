import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import logger from 'redux-logger';
import {combineReducers} from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './service/GetFakeData';
import { setupListeners } from '@reduxjs/toolkit/query';

const reducer = combineReducers({
    user: userSlice,
    [api.reducerPath]:api.reducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger,api.middleware),
    devTools: true,
});
setupListeners(store.dispatch)
export default store;
