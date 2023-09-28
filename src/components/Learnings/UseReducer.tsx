import { FC, useReducer } from "react";

//........................................... UseReducer .................................
type Todo = {
    id: number,
    title: string,
    complete: boolean,
}
const initialTodos: Todo[] = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: true,
    },
];
type Action = {
    type: any
    id: number
}
const reducer = (state: Todo[], action: Action):Todo[] => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((item) => ( item.id === action.id ? { ...item, complete: !item.complete } : item ))
        default:
            return state
    }
}
export const UseReducer: FC = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)

    const handleComplete = (todo: Todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <div>
            <h2>UseReducer Hook </h2>
            <p>The useReducer Hook returns the current state and a dispatch method.</p>
            <code>const [todos, dispatch] = useReducer(reducer, initialTodos)</code><br></br>
            <p>The reducer takes <strong>a state (can be an array of objects) and an action</strong>. <br></br>
            The action takes <strong>a state processing type and a payload of inputs for processing the state</strong>.<br></br>
            Inside The reducer are the data processing logic (CRUD), switched by action type parameter.</p>
            {todos.map(item => (
                <label>
                    <input type='checkbox' checked={item.complete} onChange={() => { handleComplete(item) }}></input>
                    {item.title}
                </label>
            ))}

        </div>
    )
};