import React, { FC, FormEvent, useRef, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai'
import './TaskifySingleTodo.css'
import { Todo } from '../../models/model'
import { ACTIONTYPE, Actions } from '../../pages/Taskify'
import { capitalize } from '../../utils/generalFuncs'

interface Props {
    todo: Todo,
    dispatch: React.Dispatch<Actions>
}

const TaskifySingleTodo: FC<Props> = ({
    todo,
    dispatch,
}) => {
    const [todoEdited,setTodoEdited] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    const btnDoneClick = (id: number) => {
        dispatch({
            type: ACTIONTYPE.DONE,
            payload: id
        })
    }
    const btnDeleteClick = (id: number) => {
        dispatch({
            type: ACTIONTYPE.DELETE,
            payload: id
        })
    }
    const btnEditClick = (id: number) => {
        inputRef.current?.removeAttribute('disabled')
        inputRef.current?.focus()
    }
    const submitHandler = (e:FormEvent,id: number) => {
        e.preventDefault()
        inputRef.current?.setAttribute('disabled','true')
        dispatch({
            type: ACTIONTYPE.EDIT,
            payload: {id:id,todo:todoEdited}
        })
    }

    return (
        <form className={`formSingle ${todo.isDone ? "done" : ""}`} onSubmit={(e)=>submitHandler(e,todo.id)}>
            <input
                ref={inputRef}
                type='text'
                className={`formSingleText ${todo.isDone ? "done" : ""}`}
                value={capitalize(todoEdited)}
                onChange={(e)=>{setTodoEdited(e.target.value)}}
                disabled></input>
            <div className='btnContainer'>
                <AiFillEdit className='icon' onClick={() => btnEditClick(todo.id)} />
                <AiFillDelete className='icon' onClick={() => btnDeleteClick(todo.id)} />
                <AiOutlineCheck className='icon' onClick={() => btnDoneClick(todo.id)} />
            </div>
        </form>
    )
}

export default TaskifySingleTodo