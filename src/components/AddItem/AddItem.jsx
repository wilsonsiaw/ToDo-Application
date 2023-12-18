import React from 'react'
import './AddItem.css'
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const AddItem = ( {data, deleteHandler} ) => {
  return (
    <div>
        <div className='item'>
            <div className="itemContent">
                <MdCancel className='cancel'/>
                <p>{data.todoItem}</p>
            </div>
            <MdDeleteForever className='delete' onClick={() => deleteHandler(data.id)}/>
        </div>
    </div>
  )
}

export default AddItem
