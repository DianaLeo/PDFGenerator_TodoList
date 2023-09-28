import { FC, FormEvent, useEffect, useReducer, useState } from "react"; import TaskifyInputFeild from '../components/Takify/TaskifyInputFeild'
import './Taskify.css'
import { Todo } from "../models/model";
import TaskifyTodoList from "../components/Takify/TaskifyTodoList";

export enum ACTIONTYPE {
    ADD,
    DELETE,
    DONE,
    EDIT
}

export type Actions =
    | { type: ACTIONTYPE.ADD, payload: string }
    | { type: ACTIONTYPE.DELETE, payload: number }
    | { type: ACTIONTYPE.DONE, payload: number }
    | { type: ACTIONTYPE.EDIT, payload: { id: number, todo: string } }

const todoReducer = (todos: Todo[], action: Actions) => {
    switch (action.type) {
        case ACTIONTYPE.ADD:
            return [...todos, { id: Date.now(), todo: action.payload, isDone: false }]
        case ACTIONTYPE.DELETE:
            return todos.filter((todo) => todo.id !== action.payload)
        case ACTIONTYPE.DONE:
            return todos.map((todo) => (todo.id === action.payload) ? { ...todo, isDone: !todo.isDone } : todo)
        case ACTIONTYPE.EDIT:
            return todos.map((todo) => (todo.id === action.payload.id) ? { ...todo, todo: action.payload.todo } : todo)
        default:
            return todos
    }
}

const Taskify: FC = () => {
    const initialTodos = (
        localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos') as string) : []
    )
    const [todo, setTodo] = useState<string>('')
    const [todos, dispatch] = useReducer(todoReducer, initialTodos)

    useEffect(() => {
        if (window.localStorage) {
            const data = JSON.stringify(todos)
            localStorage.setItem('todos', data)
        }
    }, [todos])

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()//we don't want to refresh the page, otherwise todos will be emptied
        if (todo) {
            dispatch({ type: ACTIONTYPE.ADD, payload: todo })
            setTodo('')
        }

    }

    return (
        <div className="taskify">
            <h1 className='title'>TASKIFY</h1>
            <TaskifyInputFeild todo={todo} setTodo={setTodo} submitHandler={submitHandler} />
            <TaskifyTodoList todos={todos} dispatch={dispatch} />
        </div>
    )
}

export default Taskify