import React from "react";

function App() {

  const [goals, setGoals] = React.useState(["item 1"]);
  const [goal, setGoal] = React.useState("");



  function addGoal(event) {
    event.preventDefault();
    console.log(event.target.goal.value);
    let goal = event.target.goal.value;
    
    const updatedGoalsArray = [...goals, goal];
    console.log(updatedGoalsArray);
    setGoals(updatedGoalsArray);
    setGoal("");
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
      <form onSubmit={addGoal}>
        <input 
          type="text" 
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Add goal</button>
      </form>

      {/* Display list of goals */}

      <ul   
        style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        }}
      >
        {goals.map((goal, index) => {
          return (
            
            <li key={index}>
              <input type="checkbox" id="complete" />
              {goal}
              <button style={{marginLeft: "10px", }} onClick={ () => deleteMe(index)}>Delete</button></li> 
          )
          
        })}
      </ul>
    </>
  );
}

export default App;
