import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../feactures/task/taskSlice"


// RENDERIZA LOS DATOS
const TaskList = () =>{

   const tasks = useSelector (state => state.tasks)
   const dispatch = useDispatch() 
   console.log ('task', tasks)
   const handleDelete =(id)=>{
    console.log(id)
    dispatch(deleteTask(id))

   }

    return (
        <div>
        {tasks.map(task => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={()=>handleDelete(task.id)}>Delete</button>
            </div>            
        ))}
    </div>
    )
}
export default TaskList
