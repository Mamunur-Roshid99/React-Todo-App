import { useState } from 'react'
import './App.css'

import { todoData } from "./Components/Data"
import Todos from './Components/Todos'
import NewTodo from './Components/NewTodo'

function App() {

  const [todos, setTodos] = useState(todoData)

  const handleAddTodo = (todo) => {
    setTodos((oldTodo) => {
      return [...oldTodo, todo]
    })
    console.log(todo)
  }

  return (
    <section className='container'>
      <h1>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </section>
  );
}

export default App
