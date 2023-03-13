import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})

// https://react-redux.js.org/tutorials/quick-start