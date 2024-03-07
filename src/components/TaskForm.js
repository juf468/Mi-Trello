import { useState } from "react"


const TaskForm = ( ) =>{
   
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
    event.preventDefault()
    console.log(task)
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