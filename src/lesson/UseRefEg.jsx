import React from "react";
import { useEffect, useRef, useState } from "react";

const UseRefEg = () => {
    const count = useRef(0)
    function click() {
        count.current++;
        console.log(count.current)
    }

    const inputRef = useRef(null);

    // Salam
    const [inputValue, setInputValue] = useState("");

    // Sala
    const previousInputValue = useRef("");
    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);
    return (
        <div>
            <p>{count.current}</p>
            <button onClick={click}>ADD</button>
            <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={() => inputRef.current.focus()}>Set focus</button>
            <p>Current value: {inputValue}</p>
            <p>Prev value: {previousInputValue.current}</p>
        </div>
    )
}

export default UseRefEg