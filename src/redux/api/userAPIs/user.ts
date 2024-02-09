import {RTKBuilderType} from "../clientApi";
export const getUsers = (builder: RTKBuilderType) =>
    builder.query({
        query: () => ({
            url: "user",
            method: "GET",
        }),
    });

export const getUserById = (builder: RTKBuilderType) =>
    builder.query({
        query: ({userId}) => ({
            url: `user/${userId}`,
            method: "GET",
        }),
    });

export const createUser = (builder: RTKBuilderType) =>
    builder.mutation({
        query: userData => ({
            url: "/user/create",
            method: "POST",
            body: userData,
        }),
    });
