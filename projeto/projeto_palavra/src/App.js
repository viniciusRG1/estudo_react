
import './App.css';
import StartScreen from './components/StartScreen';
import { useCallback, useEffect, useState } from 'react';
import {wordList} from "./data/words";
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"end"},
];

const guessesQty = 5

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLatters, setGuessedLatters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() *  words[category].length)]


    return {word, category}
  }, [words]);

  const startGame = useCallback(() => {
    cleatLetterStates();
    const{word, category} = pickWordAndCategory();

    let wordLetters = word.split("");  
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    setGameStage(stages[1].name);
  
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()

    if(guessedLatters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLatters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter,
      ]);
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
      ]);
      setGuesses((actualGuesses)=> actualGuesses - 1);
    }
  };

  const cleatLetterStates = () => {
    setGuessedLatters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if(guesses <= 0){
      cleatLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if(guessedLatters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)
      startGame();
    }
  }, [guessedLatters, letters, startGame])

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }

  return (
    <div className='app'>
     {gameStage === "start" && <StartScreen startGame={startGame}/>}
     {gameStage === "game" && <Game verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters}
      guessedLatters={guessedLatters} 
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
     {gameStage === "end" && <GameOver retry={retry} score={score}/>}
     
    </div>
  );
}

export default App;
