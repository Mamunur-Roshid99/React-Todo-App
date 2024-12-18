// import React from 'react'

import {v4 as uuidv4} from "uuid"

import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const Home = () => {

  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), todo}]
    })
    console.log(todo);
  }

  const handleRemoveTodo =(id) => {
    setTodos((prevTodos)=> {
      const filterTodo = prevTodos.filter((todo) => todo.id !== id)
      return filterTodo
    })
  }

  return (
    <div className="container">
      <h1 style={{color: "white"}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home
