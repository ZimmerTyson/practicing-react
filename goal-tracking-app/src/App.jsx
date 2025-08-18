import React from "react";
import {GoalForm} from "./components/GoalForm";
import {GoalList} from "./components/GoalList";

function App() {

  const [goals, setGoals] = React.useState([
    {
      status: "incomplete",
      text: "Item 1"
    }
  
  ]);



  function addGoal(event) {
    event.preventDefault();
    console.log(event.target.goal.value);

    let goal = {
      status: "incomplete", 
      text: event.target.goal.value
    };
    
    const updatedGoalsArray = [...goals, goal];
    console.log(updatedGoalsArray);
    setGoals(updatedGoalsArray);
    
  }

  function toggleGoal(index) {
   console.log("index of gaol object to be updated:", index);

  //  function callbackGoals(element, idx) {
  //   console.log("element inside goals array:", element);
  //   console.log("Index of goal in array:", idx);
  //   if(index === idx) {

  //     return {
  //       status: element.status == "incomplete" ? "complete" : "incomplete", 
  //       text: element.text,
  //     };

  //   }

  //  }

   const updatedGoalsArray = goals.map((element, idx) => {
    if(index === idx) {
      return {
        status: element.status == "incomplete" ? "complete" : "incomplete",
        text: element.text,
      }
      
    }
        return element;

   } );


   console.log("Updated Array: ", updatedGoalsArray);
   setGoals(updatedGoalsArray);
  }




  function deleteMe(index) {
    setGoals(prev => prev.filter((goal, goalsIdx) => {
     if(goalsIdx !== index) return goal;
    }));
  }



  return (
    <>
      <h1>Goal Tracking App</h1>
      {/* An input to get goal from user */}
      <GoalForm addGoal={addGoal}/>

      {/* Display list of goals */}
      <GoalList goals={goals} toggleGoal={toggleGoal} deleteMe={deleteMe}/>
      
    </>
  );
}

export default App;
