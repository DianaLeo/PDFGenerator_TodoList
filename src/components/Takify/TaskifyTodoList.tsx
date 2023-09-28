import React, { FC } from 'react'
import { Todo } from '../../models/model';
import './TaskifyTodoList.css'
import TaskifySingleTodo from './TaskifySingleTodo';
import { Actions } from '../../pages/Taskify';

interface Props {
    todos: Todo[];
    dispatch: React.Dispatch<Actions>
}

const TaskifyTodoList: FC<Props> = ({ todos, dispatch }) => {
    return (
        <div className='todoList'>
            {todos.map(t => (
                <TaskifySingleTodo 
                todo={t} 
                key={t.id}
                dispatch={dispatch}/>
            ))}
        </div>
    )
}

export default TaskifyTodoList