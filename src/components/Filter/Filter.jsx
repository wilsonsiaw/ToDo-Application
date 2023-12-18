import React from 'react';
import './Filter.css'

const Filter = () => {
  return (
    <div className='filterWrapper'>
      <div className='btnWrapper'>
        <button type='button'>All</button>
        <button type='button'>Active</button>
        <button type='button'>Completed</button>
      </div>
      <hr />
    </div>
  )
}

export default Filter
