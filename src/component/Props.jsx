import React, { useContext } from "react";
import { AppContext } from "./../App";

const Props = (props) => {
    const { setLanguage } = useContext(AppContext);
    return (
        <div>
            <button onClick={() => setLanguage('tm')}>TM</button>
            <button onClick={() => setLanguage('en')}>EN</button>
            {props.input}
        </div>
    )
}

export default Props