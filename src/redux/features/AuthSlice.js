import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';
import {toast} from 'react-toastify'

export const authlogin = createAsyncThunk(
    'auth/login',
    async ({ldata,navigate}, { rejectWithValue }) =>{
      try {
        const res = await api.AdminLogin(ldata);
        console.log(res);
        toast.success("login successfully")
        navigate('/dashboard');
        return res;
      } catch (error) {
        console.log(error);
        toast.error("something went wrong")
        return rejectWithValue(error.response.data.message);
      }
    }
  )

export const register = createAsyncThunk(
    'auth/register',
    async ({data,navigate})=>{
      try {
        console.log(data);
        const response = await api.signUp(data);
        console.log(response);
        toast.success("Registered success");
        navigate('/login');
        return response.data;
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
        }
    }
  )

const persistedState = localStorage.getItem('profile1')
  ?  JSON.parse(localStorage.getItem('profile1')) : null;

const persistedState1 = localStorage.getItem('auth1')
  ?  JSON.parse(localStorage.getItem('auth1')) : false;

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        isAuthenticated: persistedState1,
        data:persistedState,
    },
    reducers:{
        setUser: (state, action) => {
            state.data = action.payload;
        },
        login: (state , action) => {
            state.isAuthenticated = action.payload.data.isauth;
        },
        setLogout: (state) => {
            state.isAuthenticated = false;
            localStorage.clear();
            state.data = null;
        },
    },
    extraReducers:{
        [authlogin.pending]: (state, action) => {
            state.loading = true;
          },
          [authlogin.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("auth1", JSON.stringify(action.payload.data.token ));
            localStorage.setItem("profile1", JSON.stringify({ ...action.payload }));
            state.data = action.payload;
            state.isAuthenticated = action.payload.data.token;
          },
          [authlogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    }
})
export const { setUser, setLogout } = AuthSlice.actions;

export default AuthSlice.reducer;
