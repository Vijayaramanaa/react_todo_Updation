import React from 'react'


function Header({title}) {
   
  return (
    <nav className='Header'>
       <h1>{title}</h1>
    </nav>
  )
  
}
Header.defaultProps={
  title:"To do list"
}

export default Header