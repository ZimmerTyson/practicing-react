export function GoalForm({addGoal}) {
  return(
    <form onSubmit={addGoal}>
          <input type="text" id="goal"/>
          <button type="submit">Add goal</button>
    </form>
  );
}