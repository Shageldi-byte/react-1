import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "ADD": return { count: state.count + 1 }
        case "REMOVE": return { count: state.count - 1 }
        case "RESET": return { count: 0 }
        default: return state;
    }
}

const UseReducerEg = () => {
    const [state, dispatcher] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatcher({ type: 'ADD' })}>ADD</button>
            <button onClick={() => dispatcher({ type: 'REMOVE' })}>REMOVE</button>
            <button onClick={() => dispatcher({ type: 'RESET' })}>RESET</button>
        </div>
    )
}

export default UseReducerEg