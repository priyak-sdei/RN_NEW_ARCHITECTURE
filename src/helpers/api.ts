import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import AppConfig from '@helpers/AppConfig';

const createBaseQuery = () => {
    return fetchBaseQuery({
        baseUrl: AppConfig().API_BASE_URL,
        timeout: 10000,
        prepareHeaders: async headers => {
            try {
                headers.set('Content-Type', 'application/json');
                headers.set('accept', '*/*');
                return headers;
            } catch (e) {
                if (__DEV__) {
                    console.log('Error getting auth headers', e);
                }
                return Promise.reject('Error');
            }
        },
    });
};

export {createBaseQuery};
