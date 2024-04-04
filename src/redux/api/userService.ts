import urlMapping from '@constants/urlMapping';
import {clientApi} from './clientApi';
import {setMessage} from 'src/redux/slices/userSlice';
interface Post {
    id: number;
}
export const userService = clientApi.injectEndpoints({
    endpoints: builder => ({
        updateProfile: builder.mutation<any, {id: number; body: any}>({
            query: ({id, body}) => {
                return {
                    url: `${urlMapping.UPDATE_PROFILE}/${id}`,
                    method: 'put',
                    body: body,
                };
            },
        }),
        allPost: builder.query<[], void>({
            query: () => ({
                url: urlMapping.GET_POST,
                method: 'GET',
            }),
        }),
        currentPost: builder.mutation<object, any>({
            query: param => {
                return {
                    url: 'posts',
                    method: 'POST',
                    body: param,
                };
            },
            transformResponse: rawResult => {
                console.log(rawResult, 'rawResult..');
                return rawResult;
            },
            onQueryStarted: async () => {
                console.log('onQueryStarted');
            },
        }),
        updateCurrentPost: builder.mutation<object, any>({
            query: param => {
                return {
                    url: 'posts/1',
                    method: 'PUT',
                    body: param,
                };
            },
        }),
    }),
    overrideExisting: false,
});

export const {
    useUpdateProfileMutation,
    useAllPostQuery,
    useCurrentPostMutation,
    useUpdateCurrentPostMutation,
} = userService;
