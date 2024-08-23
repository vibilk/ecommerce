import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice/todo';

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});