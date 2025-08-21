import './App.css';
import QuestionComponent from "./components/QuestionComponent";
import StartComponent from "./components/StartComponent";
import ResultsComponent from "./components/ResultsComponent";
import {useState, useEffect} from "react";

const ENDPOINT = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean";

function App() {

  const [gameState, setGameState] = useState(0);
  const [question, setQuestion] = useState("RAM stands for Random Access Memory.");

  async  function fetchNextQuestion() {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    console.log("Question", data);
  }

  useEffect(()=>{
    console.log("Use Effect")
  }, [gameState]);

  console.log("inside app component 1");

  


  return (
    <div className="container">
      <h1>Trivia App</h1>
      {gameState == 0 && <StartComponent onClick={()=> setGameState(1)} />}
      {gameState == 1 && (<QuestionComponent onAnswerSelect={ () => setGameState(2)} question={question}/>)}
      {gameState == 2 && <ResultsComponent result={12} resetGame={()=> setGameState(1)} />}
    </div>
  );
}

export default App
