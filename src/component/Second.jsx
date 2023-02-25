import React from "react";
import Third from "./Third";

const Second = (props) => {
    return (
        <div>
            <h2>{props.value}</h2>
            <Third value={props.value} setValue={props.setValue} />
        </div>
    )
}

export default Second