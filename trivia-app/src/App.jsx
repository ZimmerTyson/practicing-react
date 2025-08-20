import './App.css';
import QuestionComponent from "./components/QuestionComponent";
import StartComponent from "./components/StartComponent";
import ResultsComponent from "./components/ResultsComponent";

function App() {

  return (
    <div className="container">
      <h1>Trivia App</h1>
      <StartComponent />
      <QuestionComponent question="RAM stands for Random Access Memory."/>
      <ResultsComponent result={12} />
    </div>
  );
}

export default App
