import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchposts=createAsyncThunk('getposts/posts',async(url,all_city)=>{
    return axios.get(url,all_city).then(resp=>resp.data)
})
const initialState={
    users:[],
    iserror:false,
    loading:false,
    issuccess:false
}
export const counterSlice=createSlice({
    name:'ghgh',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchposts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchposts.fulfilled,(state,action)=>{
            state.loading=false
            state.issuccess=true
            state.users=action.payload
        })
        builder.addCase(fetchposts.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.iserror=action.error.message
        })
    }
})

export default counterSlice.reducer