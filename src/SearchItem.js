import React from 'react'

function SearchItem({search,setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label className='.searchForm_label' htmlFor='search'>Search</label>
        <input className='searchForm_input'
        id="search"
        role="searchbox"
        placeholder='search items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        ></input>

    </form>
  )
}

export default SearchItem