import React, { useContext } from "react";
import { useState } from "react";

//........................................... UseContext .................................
type Mood = {
    happy: string,
    sad: string
}

const moodContext = React.createContext({
    happy: '😀',
    sad: '😭',
});

export function UseContext() {
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
            <h2>UseContext and UseState Hook {moods.sad}</h2>
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
            <h3>Nested component{moods.happy}</h3>
        </div>
    )
}
