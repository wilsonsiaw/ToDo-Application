import React from 'react';
import './Filter.css'

const Filter = ( {updateFilter} ) => {
  return (
    <div className='filterWrapper'>
      <div className='btnWrapper'>
        <button type='button' onClick={() => updateFilter("all")}>All</button>
        <button type='button' onClick={() => updateFilter("active")}>Active</button>
        <button type='button' onClick={() => updateFilter("completed")}>Completed</button>
      </div>
      <hr />
    </div>
  )
}

export default Filter
