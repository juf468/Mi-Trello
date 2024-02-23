import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "../feactures/task/taskSlice";

 export const store = configureStore({
   reducer: { tasks: tasksReducer
   }
})


