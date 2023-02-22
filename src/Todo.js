import React from 'react'

export default function Todo({todo,toggleTodos}) {

  function HandletoggleTodos() {
    toggleTodos(todo.id)
  }
 
  return (
    <div>
        <label>
            <input type='checkbox'  checked={todo.complete} onChange={HandletoggleTodos}  />
        
      {todo.name}
        </label>
        <button>edit</button>
    </div>
  )
}
