import { useSelector } from "react-redux"


// RENDERIZA LOS DATOS
const TaskList = () =>{
   const tasks = useSelector (state => state.tasks)
   console.log ('task', tasks)
    return (
        <div>
        {tasks.map(task => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>            
        ))}
    </div>
    )
}
export default TaskList
