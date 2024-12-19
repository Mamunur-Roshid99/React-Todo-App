import React from 'react'

const Todo = ({ id, title, desc }) => {
  return (
    <div className="todo">
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  );
};

export default Todo

