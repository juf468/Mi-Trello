import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../feactures/task/taskSlice"
import { v4 as uuid} from "uuid"
import { useNavigate, useParams } from "react-router-dom"



const TaskForm = ( ) =>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const params = useParams()
   const tasks = useSelector(state => state.tasks)

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
    if (params.id){
        dispatch(editTask(task))

    }else{
        dispatch(addTask({//accion que crea la task
        ...task,
        id:uuid(),//le agrego el id de uuid como prop extra
     }))
    }
     navigate('/')  
 };


 useEffect(()=>{
 if(params.id){
    setTask(tasks.find(tasks => tasks.id === params.id))//llena el form con los datos de la tarea encontrada por id
    
 }
 
 },[])
return (
<form onSubmit={handleSubmit}>
    <input name="title" type="text" placeholder="title" onChange={handleChange} value={task.title}/>
    <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}> </textarea>
    <button> save </button>
</form>
)
}
export default TaskForm