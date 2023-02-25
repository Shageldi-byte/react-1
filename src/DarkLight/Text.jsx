import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Text = () => {
    const { colors } = useContext(AppContext);
    return (
        <div>
            <h1 style={{ color: colors.text }}>Dark UI</h1>
        </div>
    )
}

export default Text