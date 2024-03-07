import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../feactures/task/taskSlice"
import { v4 as uuid} from "uuid"



const TaskForm = ( ) =>{
   const dispatch = useDispatch()

    const [task, setTask] = useState ({
        title: '',
        description: ''
    })
 const handleChange =(event)=>{
   setTask ({
    ...task,
    [event.target.name]:event.target.value
   })
 }
 const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(addTask({
        ...task,
        id:uuid(),//le agrego el id de uuid como prop extra
     }))
 }
return (
<form onSubmit={handleSubmit}>
    <input name="title" type="text" placeholder="title" onChange={handleChange}/>
    <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}> </textarea>
    <button> save </button>
</form>
)
}
export default TaskForm