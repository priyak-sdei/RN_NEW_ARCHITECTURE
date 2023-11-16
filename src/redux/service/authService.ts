import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import urlMapping from "@constants/urlMapping"

export const auth = createApi({
    reducerPath: "authService",
    baseQuery: fetchBaseQuery({
        baseUrl:urlMapping.BASE_URL,
        // credentials: 'include',  //This params is needed for the HTTP authentication token
        // timeout: 5000, // For setting  the timeout
        // prepareHeaders: async (headers,{getState, endpoint}) => {
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
            //  return headers;

            /**
             * Endpoint are the same as function name e.g Login
             */
            // if(endpoint === 'Login'){
            //   // return different header here
            // }
        // },
    }),
    endpoints: builder => ({
        //Login api call
        Login: builder.query({   //builder.query is used to retrieve and read data
            query: (body) => {
                return {
                    url:urlMapping.LOGIN,
                    method: "POST",
                    body: body,
                };
            },
        }),

        //SignUP api call
        SignUp: builder.mutation({   // builder.mutation is used for define endpoints that perform data modification or write operations. It corresponds to HTTP POST, PUT, PATCH, DELETE requests,
            query: body => {
                return {
                    url: urlMapping.SIGN_UP,
                    method: "Post",
                    body: body,
                };
            },
        }),

        //update Profile Request
        updateProfile: builder.mutation<any, { id: number; body: any }>({
            query: ({ id, body }) => {
                return {
                    url: `${urlMapping.UPDATE_PROFILE}/${id}`,
                    method: "put",
                    body: body,
                };
            },
        }),

    }),
});

export const {
    useLazyLoginQuery,
    useUpdateProfileMutation,
    useSignUpMutation
} = auth;
