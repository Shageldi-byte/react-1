import React, { useContext } from "react";
import { AppContext } from "../App";

const Third = (props) => {
    const { language } = useContext(AppContext);
    return (
        <div>
            {language}
            <input type="text" value={props.value} onChange={e => props.setValue(e.target.value)} />
        </div>
    )
}

export default Third