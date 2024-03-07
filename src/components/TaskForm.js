import { useState } from "react"


const TaskForm = ( ) =>{
   
    const [task, setTask] = useState ({
        title: '',
        description: ''
    })
 const handleChange =(event)=>{
    console.log(event.target.name, event.target.value)

 }
return (
<form>
    <input name="title" type="text" placeholder="title" onChange={handleChange}/>
    <textarea name="description" placeholder="description" onChange={handleChange}> </textarea>
    <button> save </button>
</form>
)
}
export default TaskForm