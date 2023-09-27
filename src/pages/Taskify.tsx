import { FC,FormEvent,useState } from "react";import TaskifyInputFeild from '../components/Takify/TaskifyInputFeild'
import './Taskify.css'
import { Todo } from "../models/model";
import TaskifyTodoList from "../components/Takify/TaskifyTodoList";

const Taskify:FC = () => {
    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([]);

    const submitHandler = (e:FormEvent)=>{
        e.preventDefault()//we don't want to refresh the page, otherwise todos will be emptied
        if(todo){
            setTodos([...todos,{id:Date.now(),todo,isDone:false}])
            setTodo('')
        }
    }
    console.log(todos);

    return (
        <>
            <h1 className='title'>TAKSIFY</h1>
            <TaskifyInputFeild todo={todo} setTodo={setTodo} submitHandler={submitHandler}/>
            <TaskifyTodoList todos={todos} setTodos={setTodos}/>
        </>
    )
}

export default Taskify