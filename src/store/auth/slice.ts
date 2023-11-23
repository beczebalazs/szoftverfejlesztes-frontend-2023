import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
    name: string;
    email: string;
    authToken: string | undefined;
}

const initialState: AuthSlice = {
    name: '',
    email: '',
    authToken: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<string | undefined>) => {
            state.authToken = action.payload;
        },
    },
});

export const { setAuthToken } = authSlice.actions;
export default authSlice;