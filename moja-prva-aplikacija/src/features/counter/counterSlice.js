import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1; // state.value = state.value + 1; using Immer lib in background
            // return state.value + 1; old school
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => { // ako želimo proslijediti neki podatak kroz dispatch akcije, onda u reducer-u proslijedimo "action" kao drugi argument, te tada možemo pristupiti podatku kroz "action.payload"
            state.value += action.payload;
        }
    }
})

export const { decrement, increment, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;