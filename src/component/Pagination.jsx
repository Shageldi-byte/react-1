import React, { useEffect, useState } from "react";

const style = {
    padding: '10px',
    backgroundColor: 'transparent',
    margin: '10px',
    cursor: 'pointer'
}

const activeStyle = {
    padding: '10px',
    backgroundColor: 'orange',
    margin: '10px',
    cursor: 'pointer'
}

const Pagination = () => {
    const [page, setPage] = useState(1);
    const printPage = () => {
        console.log(`Getting page ${page}`)
    }
    useEffect(() => {

    }, [])
    // side effect
    useEffect(printPage, [page])

    return (
        <div style={{ display: 'flex' }}>
            {
                new Array(10).fill(0).map((item, i) => {
                    return (
                        <button
                            key={`page-key-${i}`}
                            onClick={() => setPage(i + 1)}
                            style={page === i + 1 ? activeStyle : style}>
                            {i + 1}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination