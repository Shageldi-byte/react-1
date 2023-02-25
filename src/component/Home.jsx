import "../style/home.css";
import React from "react";

const HomeBanner = () => {
    return (
        <div>
            Home Banner
        </div>
    )
}

const style = {
    backgroundColor: 'black',
    fontFamily: 'Helvetica',
    color: 'white'
}

const defaultStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
}
// JavaScript XML
const Home = () => {
    // Logic section
    let age = 52;
    const checkAge = (age) => {
        if (age < 50) return "Yound";
        else return "Old";
    }

    // UI 
    return (
        <div style={style}>
            Current time: {new Date().getFullYear()}
            <h2>
                {
                    checkAge(age)
                }
            </h2>

            <label style={{ ...defaultStyle, color: 'green' }}>World</label>
            <label style={{ ...defaultStyle, color: 'blue' }}>fsdgf</label>
            <HomeBanner />
        </div>
    )
}


export { HomeBanner }
export default Home