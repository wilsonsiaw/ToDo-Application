import React, { useState } from 'react'
import './Input.css'

const Input = () => {

  /* Create hooks to handle the controlled form input
  * Create functions to handle changes in the form
  * and what happens when data is submitted via the form
  */

  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Todo item: ', input)
  }

  return (
    <div className='formWrapper'>
        {/* Create a form container */}
      <div className='form'>
        {/* Add a form input element */}
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="addTodo">
                    <input type="text" id='addTodo' name='addTodo' placeholder='Create a new ToDo item' value={input} onChange={handleInput}/>
                </label>
            </div>
            {/* Create a submit button */}
            <div className='btn'>
                <button type='submit'>Add</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Input
