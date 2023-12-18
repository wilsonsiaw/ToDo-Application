import { useState } from 'react'
import './App.css'
import { FaMoon } from "react-icons/fa";
import Input from './components/Input/Input';
import AddItem from './components/AddItem/AddItem';;
import Filter from './components/Filter/Filter';


function App() {

  // create useState hook
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  
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

  // Create function to delete an item from the list
  const deleteItemById = (id) => { 
    const newList = todos.filter(todo => todo.id !== id);
    setTodo(newList)
  }

  // Function to toggle the status of an item
  const toggleItemStatus = (id) => {
    setTodo(
      todos.map(todo => {
        if (todo.id === id ) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    )
  }

  // function to delete items
  const clearCompletedItems = () => {
    const todoItems = todos.filter(todo => !todo.completed);
    setTodo(todoItems);
  }

  // function that updates the filter value;
  const setFilterValue = (value) => setFilter(value);

  // function that renders based on the filter value;
  const renderItems = () => {
    let filteredList;

    if (filter === "all") {
      filteredList = todos;
    } else if (filter === "active") {
      filteredList = todos.filter(todo => !todo.completed);
    } else if (filter === "completed") (
      filteredList = todos.filter(todo => todo.completed)
    )

    return filteredList.map(todo => (<AddItem key={todo.id} data={todo} deleteHandler={deleteItemById}
    updateStatus={toggleItemStatus}/>))
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
      <Filter updateFilter={setFilterValue}/>

      {renderItems()}

      <div className='footer'>
        <p>4 items</p>
        <button type='button' onClick={clearCompletedItems}>Clear Completed</button>
      </div>
    </div>
  )
}

export default App
