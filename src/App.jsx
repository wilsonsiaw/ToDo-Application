import { useState } from 'react'
import './App.css'
import { FaMoon } from "react-icons/fa";
import Input from './components/Input/Input';


function App() {
  
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

      <Input />
    </div>
  )
}

export default App
