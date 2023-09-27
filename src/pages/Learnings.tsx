import './Learnings.css'

import React, { useState, useEffect, useRef, useReducer, useContext, FC } from 'react';
// import '/Home.css';

import { FunctionComponent } from "react";


const Learnings: FunctionComponent = () => {
    return (
        <div>
            <h1>Learning Hooks</h1>

            <UpdateMultipleState />
            <hr></hr>
            <UseEffectOneStateDependsOnAnother />
            <UseEffect />
            <hr></hr>
            <UseRef />
            <hr></hr>
            {/* <UseReducer /> */}
            <hr></hr>
            <UseContext />
        </div>

    )
};


const UpdateMultipleState: FC = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "yellow"
    });

    const changeColor = () => {
        setCar(previousState => { return { ...previousState, color: "red" } });
    };
    const changeBrand = () => {
        setCar(previousState => { return { ...previousState, brand: "subaru" } });
    }

    return (
        <div>
            <h3>UseState Hook</h3>
            <p>Update Multiple States</p>
            <p>This is a {car.color} {car.brand} {car.model} from {car.year}.</p>
            <button onClick={changeColor}>Change color</button>
            <button onClick={changeBrand}>Change brand only</button>
        </div>
    )
};

function UseEffectOneStateDependsOnAnother() {
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);
    //setTimeout(()=>{setCount(count=>count+1)},1000);
    useEffect(() => {
        setSum(s => count + s);
    }, [count]);

    return (
        <div>
            <h3>UseEffect Hook</h3>
            useEffect runs on every render.
            <p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            <button onClick={() => { setCount(c => c + 1) }}>+</button>
            <p>count = {count} .</p>
            <p>sum = {sum} .</p>
        </div>
    )
};

const UseEffect: FC = () => {
    const jason = { name: 'jason', age: 18 }
    const angela = { name: 'angela', age: 18 }
    const diana = { name: 'diana', age: 18 }

    const [value, setValue] = useState(jason)
    //const [value, setValue] = useState(100)
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
        console.log('Inside useEffect ', value)
    }, [value])

    // const clickHandler = () => {
    //     setValue(v=>v+1)
    //     console.log(value)

    //     setValue(v=>v+1)
    //     console.log(value)
    // }

    const clickHandler = () => {
        setValue({...value,age:20})
        console.log(value)

        setValue({...value,age:25})
        console.log(value)
    }

    // const clickHandlerAsync = async () => {
    //     await setValue(angela)
    //     console.log(value)
        
    //     await setValue(diana)
    //     console.log(value)
    // }

    console.log('rendered ',count.current,' times')

    //console.log(value)
    return (
        <>
            <h3>UseEffect How to Render</h3>
            <button onClick={() => { clickHandler() }}>Set Value</button>
        </>
    )
}

function UseRef() {
    return (
        <div>
            <h3>UseRef Hook</h3>
            <ul>
                <li>The useRef Hook allows you to persist values between renders.</li>
                <li> it can be used to store a mutable value that does not cause a re-render when updated.li</li>
                <li>It can be used to access a DOM element directly.</li>
            </ul>
            <section id='flexContainer'>
                <div>
                    <h4>Does Not Cause Re-renders</h4>
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                    To avoid this, we can use the useRef Hook.
                    <UseRefDoesNotCauseRerender />
                </div>
                <div>
                    <h4>Accessing DOM Elements</h4>
                    <UseRefAccessDOM />
                </div>
                <div>
                    <h4>Tracking State Changes</h4>
                    <UseRefTrackStateChanges />
                </div>
            </section>
        </div>

    )
};

function UseRefDoesNotCauseRerender() {
    const [inputValue, setInputValue] = useState("");
    //const [c,setC] = useState(-1);
    const count = useRef(0);

    //This way will also do:
    // useEffect(()=>{
    //   setC(c=>c+1);
    // },[inputValue]);

    //The initial render caused count.current++, 
    //so after the initial render, count.current has been set to 1.
    //But it won't show on the DOM, because it won't cause a second render.
    //count.current is always one step ahead of the DOM render
    useEffect(() => {
        //console.log('DoesNotCauseRerender:count.current=', count.current);
        count.current = count.current + 1;
        //console.log('DoesNotCauseRerender:count.current=', count.current);
    });

    return (
        <>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <p>Render times: {count.current}</p>
            {/* <p>Render times: {c}</p> */}
        </>
    )
};

function UseRefAccessDOM() {
    const someElement = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        someElement.current?.focus();
    }
    return (
        <>
            <input type='text' ref={someElement}></input>
            <button onClick={focusInput}>Focus</button>
        </>
    )
};

function UseRefTrackStateChanges() {
    const [inputValue, setInputValue] = useState<string>('');
    const previousValue = useRef('');
    const renderCount = useRef(0);

    const setValueandLog = (value: string) => {
        //console.log('setValueandLog: before set InputValue= ', inputValue);
        setInputValue(value);
        //console.log('setValueandLog: after set InputValue= ', inputValue);
    }
    useEffect(() => {
        //console.log('use effect: before previous.current= ', previousValue.current);
        //console.log('use effect: before renderCount.current= ', renderCount.current);
        previousValue.current = inputValue;
        renderCount.current++;
        //console.log('use effect: after previous.current= ', previousValue.current);
        //console.log('use effect: after renderCount.current= ', renderCount.current);
    }, [inputValue]);
    return (
        <>
            <input type='text' value={inputValue} onChange={(e) => setValueandLog(e.target.value)}></input>
            <p>current input value: {inputValue}</p>
            <p>Previous input value: {previousValue.current}</p>
            <p>Render count: {renderCount.current}</p>
            <p>React calls render first, and then calls useEffect. But ref doesn't cause a rerender. So ref is always one step ahead of the DOM render.</p>
        </>
    )
};

type Todo = {
    id: number,
    title: string,
    complete: boolean,
}
// function UseReducer() {
//     const initialTodos:Todo[] = [
//         {
//             id: 1,
//             title: "Todo 1",
//             complete: false,
//         },
//         {
//             id: 2,
//             title: "Todo 2",
//             complete: true,
//         },
//     ];

//     const reducer = (state: Todo[], action: { type: any; id: number; }) => {
//         switch (action.type) {
//             case "COMPLETE":
//                 return state.map(item => {
//                     if (item.id === action.id) {
//                         return { ...item, complete: !item.complete };
//                     } else { return item }
//                 })
//             default:
//                 return state;
//         }
//     }
//     const [todos, dispatch] = useReducer(reducer, initialTodos);

//     const handleComplete = (todo:Todo) => {
//         dispatch({ type: "COMPLETE", id: todo.id });
//     };

//     return (
//         <div>
//             <h3>UseReducer Hook </h3>
//             <p>The useReducer Hook returns the current stateand a dispatchmethod.</p>
//             {initialTodos.map(item => (
//                 <label>
//                     <input type='checkbox' checked={item.complete} onChange={()=>{handleComplete(todos)}}></input>
//                     {item.title}
//                 </label>
//             ))}

//         </div>
//     )
// };

type Mood = {
    happy: string,
    sad: string
}

const moodContext = React.createContext({
    happy: '😀',
    sad: '😭',
});

function UseContext() {
    const [moods, setMood] = useState<Mood>({
        happy: '😀',
        sad: '😭',
    });

    function toggleMood() {
        setMood(prevState => {
            return { ...prevState, happy: prevState.sad, sad: prevState.happy }
        });
    };

    return (
        <div className='useContext'>
            <h3>UseContext and UseState Hook {moods.sad}</h3>
            <button onClick={toggleMood}>Toggle Moods</button>
            <moodContext.Provider value={moods}>
                <NestedComponent />
            </moodContext.Provider>

        </div>
    )
};

function NestedComponent() {
    const moods = useContext(moodContext);
    return (
        <div>
            <h4>Nested component</h4>
            <p>{moods.happy}</p>
        </div>
    )
}


export default Learnings;