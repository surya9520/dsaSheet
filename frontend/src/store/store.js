import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import url from "../helper";
import questionReducers from "./slices/questionslices";
import solutionReducers from "./slices/solutionSlice"
import userReducers from "./slices/userSlice"



export const store = configureStore({
    reducer:{
        questions:questionReducers,
        solutions:solutionReducers,
        user:userReducers
    }

});

export default store