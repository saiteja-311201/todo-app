import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span
        onClick={() => toggleTodo(index)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
}
export default TodoItem;
