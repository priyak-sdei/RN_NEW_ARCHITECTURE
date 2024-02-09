import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clientApi} from "../api/clientApi";
import {userService} from "../api/userService";
// Access the list of injectEndpoints values in slices

const userSlice = createSlice({
    name: "user",
    initialState: {
        message: "Initial message",
    },
    reducers: {
        setMessage(state, action: PayloadAction<string>) {
            console.log("actionnnn", action);
            state.message = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addMatcher(userService.endpoints.currentPost.matchFulfilled, (state, action) => {
            // Access the injectedEndpoint data from the action payload
            console.log(state, action, "hiiiiii");
            state.message = action.payload;
        });
    },
});

export const {setMessage} = userSlice.actions;
export default userSlice.reducer;
