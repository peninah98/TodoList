import { useState } from "react"
import ListItem from "./ListItem"
export default function Todo(){
    const [todo,setTodo] = useState("")
    const [todoList,setTodoList] = useState([])

    const handleChange = (event) =>{
        setTodo(event.target.value)
       
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
       
        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)
        console.log(tempList)
        setTodo("")
    }
    return( 
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} type ="text" onChange={handleChange}></input>
                <button type="submit">Add</button>
            </form>

            {todoList.map((item)=>(
               <ListItem key={item} name = {item}>
                 
               </ListItem>
            ))}
        </div>
          )
}