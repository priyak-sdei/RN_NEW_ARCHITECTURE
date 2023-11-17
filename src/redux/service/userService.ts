import urlMapping from "@constants/urlMapping";
import { createApiService } from "./apiService";

const userService = createApiService.injectEndpoints({
    endpoints: (builder) => ({
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
    overrideExisting: false,
})

export const {useUpdateProfileMutation} = userService
