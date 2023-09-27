import React, { FC, FormEvent, useRef, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai'
import './TaskifySingleTodo.css'
import { Todo } from '../../models/model'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskifySingleTodo: FC<Props> = ({
    todo,
    todos,
    setTodos,
}) => {
    const [todoEdited,setTodoEdited] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    const btnDoneClick = (id: number) => {
        setTodos(todos.map((t) => (t.id === id) ? { ...t, isDone: !t.isDone } : t))
    }
    const btnDeleteClick = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id))
    }
    const btnEditClick = (id: number) => {
        inputRef.current?.removeAttribute('disabled')
        inputRef.current?.focus()
    }
    const submitHandler = (e:FormEvent,id: number) => {
        e.preventDefault()
        inputRef.current?.setAttribute('disabled','true')
        setTodos(todos.map((t) => (t.id === id) ? { ...t, todo: todoEdited } : t))
    }

    return (
        <form className={`formSingle ${todo.isDone ? "done" : ""}`} onSubmit={(e)=>submitHandler(e,todo.id)}>
            <input
                ref={inputRef}
                type='text'
                className={`formSingleText ${todo.isDone ? "done" : ""}`}
                value={todoEdited}
                onChange={(e)=>{setTodoEdited(e.target.value)}}
                disabled></input>
            <div>
                <AiFillEdit className='icon' onClick={() => btnEditClick(todo.id)} />
                <AiFillDelete className='icon' onClick={() => btnDeleteClick(todo.id)} />
                <AiOutlineCheck className='icon' onClick={() => btnDoneClick(todo.id)} />
            </div>
        </form>
    )
}

export default TaskifySingleTodo