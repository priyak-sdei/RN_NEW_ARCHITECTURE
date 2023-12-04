import urlMapping from '@constants/urlMapping';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const clientApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: urlMapping.BASE_URL,
        // credentials: 'include',
        timeout: 10000,
        prepareHeaders: async (headers, {getState, endpoint}) => {
            headers.set('Content-Type', 'application/json');
            return headers;
            /* Conditional headers based on endpoint  */
            if (endpoint === 'Login') {
            }
        },
    }),
    endpoints: builder => ({}),
});
