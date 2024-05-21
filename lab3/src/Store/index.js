import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { movieReducer } from "../redux/moviesReducer";
import { bookReducer } from "./bookSlice";

export const myStore = configureStore({
    reducer: {
        x: counterReducer,
        movieSlice: movieReducer,
        bookSlice: bookReducer,
    }
})