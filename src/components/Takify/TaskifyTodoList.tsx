import React, { FC } from 'react'
import { Todo } from '../../models/model';
import './TaskifyTodoList.css'
import TaskifySingleTodo from './TaskifySingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskifyTodoList: FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todoList'>
            {todos.map(t => (
                <TaskifySingleTodo 
                todo={t} 
                key={t.id}
                todos={todos}
                setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default TaskifyTodoList