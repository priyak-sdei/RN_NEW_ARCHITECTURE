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
import {setupListeners} from '@reduxjs/toolkit/query';
import {clientApi} from './api/clientApi';
import listingAPI from './api/ListingAPIs/listingAPI';

const reducer = combineReducers({
    user: userSlice,
    [clientApi.reducerPath]: clientApi.reducer,
    [listingAPI.reducerPath]: listingAPI.reducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [clientApi.middleware, listingAPI.middleware];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
    middleware.push(logger);
}

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middleware),
    devTools: true,
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
