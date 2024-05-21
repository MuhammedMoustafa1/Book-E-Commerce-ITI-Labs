import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({  // counterSlice is an object has it's actions and reducers
    name: 'count',
    initialState: {count:0},
    reducers: {
        //actions you want to create in this slice
        increase: (state,action)=> {
            state.count += action.payload;
        },
        decrease: (state,action)=> {
            state.count -= action.payload;
        },
    },
});

export const counterReducer =  counterSlice.reducer;
export const counterActions = counterSlice.actions;
