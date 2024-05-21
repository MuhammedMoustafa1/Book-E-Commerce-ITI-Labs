import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";
import { movieReducer } from "./moviesReducer";

export const myStore = configureStore({
    reducer: {
        counterSlice: counterReducer,
        movieSlice: movieReducer
    },
})

// create store
// rootReducer -->    reducers