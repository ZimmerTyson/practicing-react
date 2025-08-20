import {GoalListItem} from "./GoalListItem";

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
            <GoalListItem goal={goal} index={index} toggleGoal={toggleGoal} deleteMe={deleteMe} key={index} />
            
          )
          
        })}
      </ul>
  );

  
}