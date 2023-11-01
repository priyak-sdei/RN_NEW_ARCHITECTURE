import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        message: 'Initial message',
    },
    reducers: {
        setMessage(state, action: PayloadAction<string>) {
            console.log('actionnnn', action);
            state.message = action.payload;
        },
    },
});

export const {setMessage} = userSlice.actions;
export default userSlice.reducer;
