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
<form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
    <label htmlFor="title" className="block text-sm font-bold mb-2"
 > Task: </label>
    <input name="title" type="text" placeholder="title" onChange={handleChange} value={task.title}
    className ='w-full p-2 rounded-md bg-zinc-600 mb-2'/>
    <label htmlFor="description" className="block text-sm font-bold mb-2"> Description: </label>
    <textarea name="description" placeholder="description" onChange={handleChange} value={task.description} className ='w-full p-2 rounded-md bg-zinc-600 mb-2'/>
    <button className="bg-indigo-800 px-2 py-1 rounded-md"> save </button>
</form>
)
}
export default TaskForm