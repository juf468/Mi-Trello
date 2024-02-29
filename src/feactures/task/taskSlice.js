import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'1',
        title: 'task 1',
        description :'description task 1',
        complete: false
    },
    {
        id:'2',
        title: 'task 2',
        description :'description task 2',
        complete: false
    }
]

 export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{

    }

})
export default tasksSlice.reducer