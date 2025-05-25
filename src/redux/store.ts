import { configureStore } from "@reduxjs/toolkit";
import HomeSliceReducer from "./slices/HomeSlice";

export const store = configureStore({
    reducer:{
        Home :HomeSliceReducer
    }
})

export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch