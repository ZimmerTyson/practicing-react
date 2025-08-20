export function GoalListItem({goal, index, toggleGoal, deleteMe}) {
  return(
    <li key={index}>
            <input type="checkbox" id="complete" onClick={ () => toggleGoal(index)} />
            <span style={{textDecoration: goal.status === "complete" ? "line-through" : "none"}}  >
              {goal.text}
            </span>
            <button style={{marginLeft: "10px", }} onClick={ () => deleteMe(index)}>Delete</button></li> 
  );
}