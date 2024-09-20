import {createSlice,createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'
const initialState ={
    user: null,
    token: null,
    isLoading: false,
    status: null
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async({login,password})=>{
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
            return isRejectedWithValue(error.response?.data || 'Registration failed. At authSlice');        }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.status = null;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = 'Registration successful';
            state.user = action.payload.user 
            state.token = action.payload.token
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.status = action.payload?.message;
          });
      },
})
export default authSlice.reducer