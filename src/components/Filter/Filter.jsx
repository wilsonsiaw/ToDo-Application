import React from 'react';
import './Filter.css'

const Filter = () => {
  return (
    <div className='filterWrapper'>
      <div className='btnWrapper'>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <hr />
    </div>
  )
}

export default Filter
