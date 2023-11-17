import urlMapping from "@constants/urlMapping";
import { clientApi } from "./clientApi";

const authService = clientApi.injectEndpoints({
    endpoints: (builder) => ({
        Login: builder.query({
            query: (body) => ({
                url: urlMapping.LOGIN,
                method: "POST",
                body: body,
            }),
        }),
        SignUp: builder.mutation({
            query: (body) => ({
                url: urlMapping.SIGN_UP,
                method: "POST",
                body: body,
            }),
        }),
    }),
    overrideExisting: false,
})

export const { useLazyLoginQuery, useSignUpMutation } = authService
