import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';
import {toast} from 'react-toastify'

export const get_all_videos = createAsyncThunk(
    'video/getall',
    async (accessToken) => { 
        console.log(accessToken);
        try {
            const response = await api.getvideos(accessToken);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const get_video_status = createAsyncThunk(
    'video/status',
    async (accessToken)=>{
        try {
            const response = await api.get_status(accessToken);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const get_by_id = createAsyncThunk(
    'video/getbyid',
    async (prid) =>{
        console.log(prid);
        try {
            const response = await api.getbyid(prid);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const edit_data = createAsyncThunk(
    'video/edit',
    async (editeddata) => {
        console.log(editeddata)
        try {
            const response = await api.editbyid(editeddata);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
)

const persistedState = localStorage.getItem('video_prid')
  ?  JSON.parse(localStorage.getItem('video_prid')) : null;


const VideoSlice = createSlice({
    name:"video",
    initialState:{
        loading:false,
        video_list : [],
        video_by_id:persistedState,
        video_stats:null
    },
    reducers:{
        setvideos:(state,action) =>{
            state.video_list = action.payload
        },
        setvideosbyId:(state,action) =>{
            state.video_list = action.payload
        },
        setvideosStatus:(state,action) =>{
            state.video_list = action.payload
        }
    },
    extraReducers:{
        [get_all_videos.pending]: (state, action) => {
            state.loading = true;
        },
        [get_all_videos.fulfilled]: (state, action) => {
          state.loading = false;
          state.video_list = action.payload;
        },
        [get_all_videos.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        [get_by_id.pending]: (state, action) => {
            state.loading = true;
        },
        [get_by_id.fulfilled]: (state, action) => {
          state.loading = false;
          console.log(typeof(action.payload))
        //   localStorage.setItem("video_prid", JSON.stringify(action.payload ));
          state.video_by_id = action.payload;
        },
        [get_by_id.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        [get_video_status.pending]: (state, action) => {
            state.loading = true;
        },
        [get_video_status.fulfilled]: (state, action) => {
          state.loading = false;
          state.video_stats = action.payload;
        },
        [get_video_status.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
    }
})

export const { setvideos ,setvideosbyId ,setvideosStatus} = VideoSlice.actions;

export default VideoSlice.reducer;