import React from 'react'
import Lineitem from './Lineitem'


function Itemlist({items,handleCheck,handleDelete}) {
  return (
    <div>
         <ul>
         { items.map((item)=>{ return(
         <Lineitem
        item={item}
        key = {item.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />)
        })}
    
     </ul>
    </div>
  )
}

export default Itemlist