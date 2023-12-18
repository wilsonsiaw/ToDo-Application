import React from 'react'
import './AddItem.css'
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const AddItem = ( {title} ) => {
  return (
    <div>
        <div className='item'>
            <div className="itemContent">
                <MdCancel id='cancel'/>
                <p>{title}</p>
            </div>
            <MdDeleteForever id='delete'/>
        </div>
    </div>
  )
}

export default AddItem
