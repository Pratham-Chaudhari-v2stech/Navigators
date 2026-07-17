import { createSlice } from "@reduxjs/toolkit";


const initialState={
    appTitle:'User Registration app'
}
const appSlice= createSlice({
    name:'app',
    initialState,
    reducers:{},
})

export default appSlice.reducer