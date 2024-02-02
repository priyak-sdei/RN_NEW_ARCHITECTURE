import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    createApi,
} from '@reduxjs/toolkit/query/react';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';

import {createBaseQuery} from '@helpers/api';

export type RTKBuilderType = EndpointBuilder<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    string,
    'api'
>;

export const clientApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: () => ({}),
    keepUnusedDataFor: 600,
    refetchOnMountOrArgChange: 5,
});
