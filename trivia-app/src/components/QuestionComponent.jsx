import React from 'react'

export default function QuestionComponent({question, onAnswerSelect}) {
  return (
    <div className="question">
      <p>{question}</p>
      <div className="actions">
        <button onClick={()=>onAnswerSelect(true)} >True</button>
        <button onClick={()=>onAnswerSelect(false)} >False</button>
      </div>
    </div>
  )
}
