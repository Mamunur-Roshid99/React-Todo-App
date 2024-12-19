import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title: "", desc: ""})
    const { title, desc} = todo

    const handleChange = (e) => {
        const name = e.target.name
        setTodo((oldTodo) => {
            return {...oldTodo, [name] : e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTodo(todo);
    }

  return (
    <form className="new_todo" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" value={title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="desc">Description: </label>
        <textarea type="text" id="desc" name="desc" value={desc} onChange={handleChange} />
      </div>
      <button type='submit'>Send</button>
    </form>
  );
}

export default NewTodo
