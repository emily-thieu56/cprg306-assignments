"use client"

import { useState } from "react";

export default function SimpleCounter() {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    }
    //setCounter(1); //setCount triggers a re-render of the page, 
    //so we cannot invoke the setter in the code call. 
    return (
        <div>
            <h2>Simple Counter</h2>
            <p>Count: {count}</p>
            <button onClick={incrementCounter}>Increment!</button>
        </div>
    );
}