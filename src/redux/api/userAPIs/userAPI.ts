import {clientApi} from '../clientApi';
import {getUsers, getUserById, createUser} from './user';
const userAPIs = clientApi.injectEndpoints({
    endpoints: builder => ({
        getAllUser: getUsers(builder),
        getUsersById: getUserById(builder),
        createUser: createUser(builder),
    }),
});

export const {useGetAllUserQuery, useGetUsersByIdQuery, useCreateUserMutation} = userAPIs;
