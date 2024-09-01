import React from 'react'

export default function Todoitem({todo, ondelete}) {
  return (
    <div className="todos-items">
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
         <button onClick={()=>{ondelete(todo)}}>Delete</button>
    </div>
  )
}
