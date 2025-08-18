export function GoalList({goals, toggleGoal, deleteMe}) {
  return (
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
            <input type="checkbox" id="complete" onClick={ () => toggleGoal(index)} />
            <span style={{textDecoration: goal.status === "complete" ? "line-through" : "none"}}  >
              {goal.text}
            </span>
            <button style={{marginLeft: "10px", }} onClick={ () => deleteMe(index)}>Delete</button></li> 
          )
          
        })}
      </ul>
  );

  
}