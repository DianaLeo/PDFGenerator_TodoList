import React, { FC, FormEvent, useRef } from 'react'
import './TaskifyInputFeild.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    submitHandler: (e: FormEvent) => void
}
const TaskifyInputFeild: FC<Props> = ({ todo, setTodo, submitHandler }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='form' onSubmit={(e) => {
            submitHandler(e)
            inputRef.current?.blur()
        }}>
            <input ref={inputRef} type='input' placeholder='Enter a task' className='formInput' value={todo} onChange={(e) => { setTodo(e.target.value) }}></input>
            <button type='submit' className='formBtn'>GO</button>
        </form>
    )
}

export default TaskifyInputFeild