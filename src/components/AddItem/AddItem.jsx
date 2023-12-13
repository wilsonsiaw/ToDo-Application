import React from 'react'
import './AddItem.css'
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const AddItem = () => {
  return (
    <div className='addItemWrapper'>
        <div className='item'>
            <div className="itemContent">
                <MdCancel id='cancel'/>
                <p>Item 4</p>
            </div>
            <MdDeleteForever id='delete'/>
        </div>
        <hr id='hr'/>
    </div>
  )
}

export default AddItem
