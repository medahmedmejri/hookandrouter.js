import React from 'react'

function filter() {
  const [Search,setSearch]=useState('')
  return (
    <div>
      <div > 
     <input onChange={(e)=>setSearch(e.target.value)}  placeholder="Search">search</input>
      </div>
    </div>
  )
}

export default filter;


