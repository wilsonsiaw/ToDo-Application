import React from 'react'
import './AddItem.css'
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";


const AddItem = ( {data, deleteHandler, updateStatus} ) => {
  return (
    <div>
        <div className='item'>
            <div className="itemContent">
                {data.completed ? <MdCheck className='check' onClick={() => updateStatus(data.id)}/> :
                <MdCancel className='cancel' onClick={() => updateStatus(data.id)}/>}
                {/* <MdCancel className='cancel' onClick={() => updateStatus(data.id)}/> */}
                <p style={data.completed ? {textDecoration: 'line-through'} : null}>{data.todoItem}</p>
            </div>
            <MdDeleteForever className='delete' onClick={() => deleteHandler(data.id)}/>
        </div>
    </div>
  )
}

export default AddItem
