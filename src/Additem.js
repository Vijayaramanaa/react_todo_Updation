import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
   <form className='addForm' id="addName" onSubmit={handleSubmit}>
     <p htmlFor="addItem" className="addForm_label">Add Item</p>
     <input
        ref={inputRef}
        autoFocus
        id = 'addItem'
        type = "text"
        placeholder='Add Item'
        required
        value = {newItem}
        onChange={(e)=>setNewItem(e.target.value)}
     />
     <button type="submit"
     onClick={()=>inputRef.current.focus()}
       >
        <FaPlus/>
     </button>
   </form>
  )
}

export default Additem