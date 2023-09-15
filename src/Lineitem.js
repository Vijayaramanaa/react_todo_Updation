import React from 'react'
import{FaTrashAlt}from 'react-icons/fa'
function Lineitem({item,handleCheck,handleDelete}) {
  return (
    <>
     
     <li className='item' key={item.id}><input
    type = "checkbox"
    onChange={()=>handleCheck(item.id)}
    checked = {item.checked}/>
    <p
    style = {(item.checked)?{textDecoration :'line-through'}:null}
    onDoubleClick={()=>handleCheck(item.id)} 
    >{item.item}</p>
    <FaTrashAlt
    role = "button"
    tabIndex="0"
    onClick={()=>handleDelete(item.id)}
    />
    </li> 
    </>
  )
}

export default Lineitem