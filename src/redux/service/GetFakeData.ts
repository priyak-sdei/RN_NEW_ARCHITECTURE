import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "apiCall",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({

    //getData api call
    getTodo: builder.query({
      query: id => {
        return {
          url: `posts/${id}`,
          method: 'GET',
        };
      },
    }),

    //postData api call
    postData: builder.mutation({
      query: body => {
        return {
          url: 'posts',
          method: 'Post',
          body: body
        };
      },
    }),


    //patch api request
    patchRequest: builder.query<any, { id: number; body: any }>({
      query: ({ id, body }) => {
        return {
          url: `posts/${id}`,
          method: 'put',
          body: body
        };
      },
    }),

    //delete api request
    deleteRequest: builder.mutation({
      query: id => {
        console.log('delete request', id);
        return {
          url: `posts/${id}`,
          method: 'delete',
        };
      },
    }),
  }),
});

export const { useLazyGetTodoQuery, usePostDataMutation, useLazyPatchRequestQuery, useDeleteRequestMutation } = api;