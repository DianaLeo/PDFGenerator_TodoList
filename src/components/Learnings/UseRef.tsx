import { FC, useState, useRef, useEffect } from "react";
import './UseRef.css'

export const UseRef: FC = () => {
    return (
        <div>
            <h2>UseRef Hook</h2>
            <ul className='useRefUl'>
                <li>The useRef Hook allows you to persist values between renders.</li>
                <li> it can be used to store a mutable value that does not cause a re-render when updated.li</li>
                <li>It can be used to access a DOM element directly.</li>
            </ul>
            <section id='flexContainer'>
                <div className="usage">
                    <h4>Does Not Cause Re-renders</h4>
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                    To avoid this, we can use the useRef Hook.
                    <UseRefDoesNotCauseRerender />
                </div>
                <div className="usage">
                    <h4>Accessing DOM Elements</h4>
                    <UseRefAccessDOM />
                </div>
                <div className="usage">
                    <h4>Tracking State Changes</h4>
                    <UseRefTrackStateChanges />
                </div>
            </section>
        </div>

    )
};

const UseRefDoesNotCauseRerender: FC = () => {
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

const UseRefAccessDOM: FC = () => {
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

const UseRefTrackStateChanges: FC = () => {
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