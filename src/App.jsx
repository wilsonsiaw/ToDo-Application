import { useState } from 'react'
import './App.css'
import { FaMoon } from "react-icons/fa";
import Input from './components/Input/Input';
import AddItem from './components/AddItem/AddItem';;
import Filter from './components/Filter/Filter';


function App() {

  // create useState hook
  const [todos, setTodo] = useState([]);
  
  // function that adds new todo items to the todo list
  const addTodo = (text) => {
    // object that you want to render as a todo item
    const newToDo = {
      id: Date.now(),
      todoItem: text,
      completed: false,
    }

    setTodo([newToDo, ...todos]);
  }
  
  return (
    <div className='body'>

      {/* create the header element */}
      <header className='headerWrapper'>

        {/* insert the content */}
        <div className='header-content'>
          <div className='todo'>
            <h1>TODO</h1>
          </div>
          <div className='moon'>
            <FaMoon />
          </div>
        </div>
      </header>
      {/* Add the function created above as a handler */}
      <Input addHandler={addTodo}/>
      <Filter />

      {/* Map over the todos items and render an individual AddItem component */}
      {todos.map((todo) => <AddItem key={todo.id} title={todo.todoItem}/>)}
      
      {/* <AddItem /> */}
    </div>
  )
}

export default App
