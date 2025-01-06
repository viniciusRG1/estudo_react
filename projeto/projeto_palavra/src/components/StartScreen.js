import "./StartScreen.css"

const StartScreen = ({startGame}) => {
    return <div className="start"> 
        <h1>Secret Word</h1>
        <p>Click para iniciar</p>
        <button onClick={startGame}> click aqui </button>
    </div>
};

export default StartScreen;