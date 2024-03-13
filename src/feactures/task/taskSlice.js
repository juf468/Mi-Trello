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
        addTask: (state, action)=>{
           state.push(action.payload); 
        },   
        editTask: (state, action) => {//necesito el id y el payload con los nuevos datos
           const {id, title, description} = action.payload
           const foundtask = state.find (task => task.id === id)
           if (foundtask){
            foundtask.title = title
            foundtask.description = description

           }

        
        },
        deleteTask: (state,action)=>{
           const taskFound = state.find (task => task.id === action.payload)
          if (taskFound) {
            state.splice(state.indexOf(taskFound),1) // eliminará la primera aparición de taskFound en el array state
          }

        },
   

    }

})
export const {addTask, deleteTask, editTask} = tasksSlice.actions
export default tasksSlice.reducer