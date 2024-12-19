import React from 'react'
import Todo from './todo'

const Todos = (props) => {
  return (
    <article className="todos">
      {
       props.todos.map((todo, index) => (
         <Todo key={index} {...todo} />
      ))
      }
    </article>
  );
}

export default Todos
