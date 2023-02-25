import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Todos from "./Todos";
import useWindowSize from "../common/useWindowSize";
import { memo } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return { count: state.count + 1 }
        case 'SUB': return { count: state.count - 1 }
        case 'ADD10': return { count: state.count + 10 }
        case 'SUB10': return { count: state.count - 10 }
        case 'RESET': return { count: 0 }
        default: return state
    }

}





const Hook = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })


    function LogButtonClicks() {
        const countRef = useRef(0);
        const handle = () => {
            countRef.current++;
            console.log(`Clicked ${countRef.current} times`);
        };
        console.log('I rendered!');
        return <button onClick={handle}>Click me</button>;
    }


    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    const num = 1;
    const answer = useMemo(() => num + 1, [num])

    const size = useWindowSize();


    return (
        <div>

            {/* useReducer */}
            <p>Count is: {state.count}</p>
            <button onClick={() => dispatch({ type: 'ADD' })}>Add 1</button>

            <div></div>

            {/* useRef */}
            {LogButtonClicks()}

            <div>
                <UseRefEg />
            </div>

            <div>
                <input type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <h2>Current Value: {inputValue}</h2>
                <h2>Previous Value: {previousInputValue.current}</h2>
            </div>

            <div>
                <Todos todos={todos} addTodo={addTodo} />
            </div>

            <div>
                {answer}
            </div>

            <div>
                {size.width}
            </div>

        </div>
    )
}


const UseRefEg = () => {
    const inputElement = useRef();
    const focusInput = () => { inputElement.current.focus(); };
    return (
        <><input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button></>
    )
}



export default Hook