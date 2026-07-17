import { configureStore } from '@reduxjs/toolkit';
import appreducer from './appSlice'

export const store= configureStore({
    reducer:{
        app:appreducer,
    }
})
export type RootState= ReturnType <typeof store.getState>