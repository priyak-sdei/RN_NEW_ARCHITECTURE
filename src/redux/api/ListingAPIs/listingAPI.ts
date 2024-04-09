import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import getPagintionData from './getPaginitionData';

export const listingTagTypes = {
    listing: 'listing',
};

export const listingAPI = createApi({
    reducerPath: 'listingAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        prepareHeaders: async headers => {
            headers.set('Accept', 'application/json');
        },
        validateStatus(response) {
            return response?.status >= 200 && response?.status < 304;
        },
    }),
    endpoints: builder => ({
        getPagintionData: getPagintionData(builder),
    }),
});

export default listingAPI;
export const {useGetPagintionDataQuery} = listingAPI;
