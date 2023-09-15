import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { useState } from 'react'
import Additem from './Additem'
import SearchItem from './SearchItem'
import { useEffect } from 'react'
import apiRequest from './apirequest'

function App() {
  const API_URL = 'http://localhost:3500/item';
  const[items,setItems] = useState([]);
   const [newItem,setNewItem]= useState('');
   const [search,setSearch]= useState('')
   const [fetchError,setFetchError] = useState(null)
   const [isLoading,setIsLoading] = useState(true)
   
   useEffect( ()=>{
    const fetchItems = async()=>{
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Data not received")
        const listItem = await response.json()
        setFetchError(null)
        setItems(listItem)
      }
      catch (err){
        console.log(err.stack)
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
    (async()=> await fetchItems())()},2000)
   },[])
   const handleCheck = async(id)=>{
     const listItem = items.map((item)=>
      item.id === id? {...item,checked:!item.checked}:item)
      setItems(listItem)
      const myItem = listItem.filter((item)=>
        item.id === id     
       )
       const updateOptions = {
        method : 'PATCH',
        headers: {
          'Content-Type':'application/json'
        },
        body : JSON.stringify({checked:myItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,updateOptions)
      if(result)setFetchError(result)
   }
   const handleDelete = async (id)=>{
        const listItem = items.filter((item)=>
          item.id !== id )
        setItems(listItem)
        const deleteOption = {method :'DELETE'}
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl,deleteOption)
        if(result) setFetchError(result)
        
   }
   const handleSubmit = (e)=>{
      e.preventDefault();
      if(!newItem)return;
      console.log(e)
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
   }
      const addItem = async(item) =>{
        const id = items.length? items[items.length-1].id +1 : 1
        const addNewItem = {id,checked:false,item}
        const listItems = [...items,addNewItem]
        setItems(listItems)
        const postOptions = {
          method : 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body : JSON.stringify(addNewItem)
        }
        const result = await apiRequest(API_URL,postOptions)
        if(result)setFetchError(result)
     }
      
   
   
   
  
  return (
    <div>
      <Header  />
      <Additem
      newItem = {newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch = {setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        <p>{fetchError && `Error :${fetchError}`}</p>

      {!isLoading && !fetchError && <Content
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      
      handleCheck={handleCheck}
      handleDelete={handleDelete} 
      />}
      </main>
      
      <Footer
      items={items}
      />
    </div>
  )
}

export default App
