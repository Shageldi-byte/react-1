import React, { useMemo } from "react";

const UseMemo = () => {
    const num = 1;
    const answer = useMemo(() => num + 1, [num]);
    return (
        <div>
            {answer}
        </div>
    )
}

export default UseMemo