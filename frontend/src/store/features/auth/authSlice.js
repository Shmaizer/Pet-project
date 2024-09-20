import {createSlice,createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'
import { log } from 'console';
const initialState ={
    user: null,
    token: null,
    isLoading: false,
    status: null
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async({login,password},rejectWithValue)=>{
        try{
            const {data} = await axios.post('/register',{
                login,
                password
            })
            if(data.token){
                window.localStorage.setItem('token',data.token)
            }
            return data;
        }catch(error){
            return isRejectedWithValue(error.response.data);        }
})
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }, rejectWithValue) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            return rejectWithValue(error.response.data);        }
        }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearStatus: (state) => {
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
        //регистрация
            .addCase(registerUser.rejectWithValue, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
        //авторизация
            .addCase(loginUser.rejectWithValue,(state,action)=>{
                state.status = action.payload.message
                state.isLoading = false
            })
            .addCase(loginUser.pending,(state,action)=>{
                state.isLoading = true
                state.status = null
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.isLoading = false
                state.status = action.payload.message
                state.user = action.payload.user
                state.token = action.payload.token
            })
    },
});

export const { clearStatus } = authSlice.actions;
export default authSlice.reducer;
