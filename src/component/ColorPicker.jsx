import React from "react";

const ColorPicker = () => {
    let color = 'red';
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                backgroundColor: color,
                height: '100px',
                width: '100px'
            }}>

            </div>
            <label style={{ color: color }}>Hello </label>


            <div>
                <input type="color" onChange={e => alert(e.target.value)} />
            </div>
        </div>
    )
}

export default ColorPicker