import React from 'react'


export default function ToDo({id, importance, title, deleteToDo}) {
  return (
    <div>
        <p className={importance}>{title}</p>
        <p>{importance}</p>
        <button onClick={() => deleteToDo(id)}>Delete</button>
    </div>
  )
}