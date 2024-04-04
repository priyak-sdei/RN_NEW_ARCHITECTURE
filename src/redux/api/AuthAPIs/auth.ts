import {RTKBuilderType} from '../clientApi';

type loginUserResponse = {
    Token?: string;
    result?: any;
    status: boolean;
    message: string | undefined;
};
type registerUserResponse = {
    Token?: string;
    result?: any;
    status: boolean;
    message: string;
    messgae: string;
};
type forgotUserResponse = {
    message: string;
    status: boolean;
};
type loginUserRequest = {
    email: string;
    password: string;
};

interface registerUserRequest {
    append(name: string, value: string): void;
    append(email: string, value: string): void;
    append(password: string, value: string): void;
    append(dateOfBirth: string, value: string): void;
    append(phone: string, value: string): void;
    append(organization: string, value: string): void;
    append(state: string, value: string): void;
    append(city: string, value: string): void;
    append(profile_photo: string, value: string | Blob): void;
}
type stateValues = {
    key: string;
    value: string;
    _id: string;
    state: string;
};
type stateResponse = {
    result: Array<stateValues>;
};

type forgotRequest = {
    email: string;
};
export const loginUser = (builder: RTKBuilderType) =>
    builder.mutation<loginUserResponse, loginUserRequest>({
        query: userData => ({
            url: 'investor_login',
            method: 'POST',
            body: userData,
        }),
        transformResponse: (response: loginUserResponse) => {
            return response;
        },
    });

export const registerUser = (builder: RTKBuilderType) =>
    builder.mutation<registerUserResponse, registerUserRequest>({
        query: userData => ({
            url: 'add_Investor',
            method: 'POST',
            body: userData,
        }),
        transformResponse: (response: registerUserResponse) => {
            return response;
        },
    });

export const getStates = (builder: RTKBuilderType) =>
    builder.query<Array<stateValues>, void>({
        query: () => 'get_all_state',
        transformResponse: (response: stateResponse) => {
            return response?.result?.map(m => {
                m.key = m._id;
                m.value = m.state;
                return m;
            });
        },
    });

export const forgotPassword = (builder: RTKBuilderType) =>
    builder.mutation<forgotUserResponse, forgotRequest>({
        query: forgotData => ({
            url: 'resetlink_investor',
            method: 'POST',
            body: forgotData,
        }),
        transformResponse: (response: forgotUserResponse) => {
            return response;
        },
    });
