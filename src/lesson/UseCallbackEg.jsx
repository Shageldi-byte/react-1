import React, { useCallback, useState } from "react";
import Todos from "../hook/Todos";

const UseCallbackEg = () => {

    const [todos, setTodos] = useState([]);


    const addTodo = useCallback(() => {
        setTodos((t) => [...t, 'New Todo'])
    }, [todos])

    return (
        // re-render
        <div>
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    )
}

export default UseCallbackEg