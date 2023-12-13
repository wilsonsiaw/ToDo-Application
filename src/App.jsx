import { useState } from 'react'
import './App.css'
import { FaMoon } from "react-icons/fa";


function App() {
  
  return (
    <div>

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

    </div>
  )
}

export default App
