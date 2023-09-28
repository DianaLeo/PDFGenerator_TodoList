import { FC, useState, useEffect, useRef } from "react";

export const UseEffectOneStateDependsOnAnother: FC = () => {
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);
    //setTimeout(()=>{setCount(count=>count+1)},1000);
    useEffect(() => {
        setSum(s => count + s);
    }, [count]);

    return (
        <div>
            <h2>UseEffect Hook</h2>
            <p>useEffect runs on every render.</p>
            <p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            <p>UseEffect is also useful when <strong>ONE STATE DEPENDS ON ANOTHER STATE</strong></p>
            <button onClick={() => { setCount(c => c + 1) }}>+</button>
            <p>count = {count} .</p>
            <p>sum = {sum} .</p>
        </div>
    )
};

export const UseEffect: FC = () => {
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
        setValue({ ...value, age: 20 })
        console.log(value)

        setValue({ ...value, age: 25 })
        console.log(value)
    }

    // const clickHandlerAsync = async () => {
    //     await setValue(angela)
    //     console.log(value)

    //     await setValue(diana)
    //     console.log(value)
    // }

    console.log('rendered ', count.current, ' times')

    //console.log(value)
    return (
        <>
            <h3>UseEffect How to Render</h3>
            <button onClick={() => { clickHandler() }}>Set Value</button>
        </>
    )
}
