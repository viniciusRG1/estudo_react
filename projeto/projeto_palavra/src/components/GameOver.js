import React from "react";

import './GameOver.css'

const GameOver = ({retry, score}) => {
    return (<div>
        <h1>você tentou</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>tentar novamente</button>
    </div>)
}

export default GameOver;