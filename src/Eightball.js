import React from 'react';
import "./Eightball.css"
import { useState } from "react";


const Eightball = ({answers}) => {
    const [currColor, setCurrColor] = useState("black")
    const [currMsg, setCurrMsg] = useState("Think of a Question")
    const genRandomIdx = () => Math.floor(Math.random() * answers.length);
    console.log(answers)

    const handleClick = () => {
        const getRandomIdx = genRandomIdx()
        setCurrMsg(answers[getRandomIdx].msg)
        setCurrColor(answers[getRandomIdx].color)
    }

    return (
        <div className = "Eightball" >
            <div onClick={handleClick} className="Eightball-circle" style={{backgroundColor: currColor} }>
                <p className="Eightball-msg">{currMsg} </p>
            </div>
        </div>
    );
};

export default Eightball;
