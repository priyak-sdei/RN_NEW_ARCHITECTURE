import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import urlMapping from "@constants/urlMapping";
import GLOBALS from "@constants/index";

const createBaseQuery = () => {
    return fetchBaseQuery({
        baseUrl: urlMapping.API_BASE_URL,
        timeout: 10000,
        prepareHeaders: async headers => {
            try {
                headers.set("Content-Type", "application/json");
                headers.set("app-id", "657699cb7cb93a12a0ab982d");
                return headers;
            } catch (e) {
                if (__DEV__) {
                    console.log("Error getting auth headers", e);
                }
                return Promise.reject("Error");
            }
        },
    });
};

export {createBaseQuery};
