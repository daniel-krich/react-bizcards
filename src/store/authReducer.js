import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserLocalStorage } from '../services/authService';

const initState = {
    user: getCurrentUserLocalStorage(),
    loading: false,
    error: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        nullifyUser: (state) => {
            state.user = null;
        },
    }
});


export const authReducer = authSlice.reducer;
export const { setUser, nullifyUser } = authSlice.actions;