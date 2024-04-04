import {clientApi} from '../clientApi';
import {loginUser, getStates, registerUser, forgotPassword} from './auth';
export const authAPIs = clientApi.injectEndpoints({
    endpoints: builder => ({
        loginUser: loginUser(builder),
        getAllState: getStates(builder),
        registerUser: registerUser(builder),
        forgotPassword: forgotPassword(builder),
    }),
    overrideExisting: true,
});

export const {
    useLoginUserMutation,
    useGetAllStateQuery,
    useRegisterUserMutation,
    useForgotPasswordMutation,
} = authAPIs;
