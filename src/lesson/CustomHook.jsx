import React from "react";
import useWindowSize from "../common/useWindowSize";

const CustomHook = () => {
    const size = useWindowSize();
    return (
        <div>
            {size.width}
        </div>
    )
}

export default CustomHook