
import urlMapping from '@constants/urlMapping';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createApiService =createApi({
            baseQuery: fetchBaseQuery({
                baseUrl: urlMapping.BASE_URL,
                // credentials: 'include',
                // timeout: 5000,
                prepareHeaders: async (headers, { getState, endpoint }) => {
                    /**
                     * get the token from redux store directly using the getState function
                     */
                    // const userToken = getState()?.userSlice.token;
                    // if (userToken) {
                    //     headers.set('Authorization', `${userToken}`);
                    //     headers.set('Content-Type', 'application/json');
                    // }
                    // else {
                    //     headers.set('Content-Type', 'application/json');
                    // }
                    // return headers;
                    /**
                     * Endpoint are the same as function name e.g Login
                     */
                    if (endpoint === 'Login') {
                        // return different header here
                    }
                },
            }),
            endpoints: (builder) => ({}),
        });