import React from 'react'

function Footer({items}) {
   
    let Noe = new Date().getFullYear()
    let leng = items.length
   

  return (
    <footer className='footer'>
      <p> {leng} list {leng ===1 ? "item":"items"}</p>
      <h1> CopyRight &copy; {Noe} </h1>
    </footer>
  )
 
}

export default Footer