import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../feactures/task/taskSlice"
import { Link } from "react-router-dom"


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
        <div className="w-4/6">
            <header className="flex justify-between items-center py-4"> 
                <h1> Task {tasks.length} </h1>
                <Link to='/create-task' className="bg-indigo-800 rounded-md px-2 py-1 "> Create task </Link>
            </header>
            <div className="grid grid-cols-3 gap-4">
        {tasks.map(task => (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                <header className="flex justify-between">
                <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`}
                className="bg-zinc-600 px-2 py-1 text-xs rounded-md"> Edit </Link>
                 <button onClick={()=>handleDelete(task.id)}
                 className="bg-red-400 px-2 py-1 text-xs rounded-md self-center"
                 >Delete</button> 
                 
                </div>
              
             </header>
                <p>{task.description}</p>
                
              
            </div>            
        ))}
        </div>
    </div>
    )
}
export default TaskList
