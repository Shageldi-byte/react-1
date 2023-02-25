import React, { useContext } from "react";
import { AppContext } from "./../App";

const Text = () => {
    const { colors } = useContext(AppContext)
    return (
        <div>
            <h2 style={{ color: colors.text }}>Hello</h2>
        </div>
    )
}

export default Text