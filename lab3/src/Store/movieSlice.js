import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: []
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});

export const movierReducer = movieSlice.reducer;
export const movieActiins  = movieSlice.actions;