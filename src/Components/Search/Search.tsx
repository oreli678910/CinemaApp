import React, { useState } from 'react'
import './Search.css'

function Search({onChange}:any) {
    const [searchValue,setSearchValue]=useState('')

    const onChangeText=(val:any)=>{
        console.log(val)
        setSearchValue(val?.target?.value)
        onChange(val?.target?.value)
    }
    
  return (
    <div className="container">
    {/* <form>
    <input type="search" placeholder="Search..."/>
    <button type="submit">Search</button>
  </form> */}
    <input className="nosubmit" type="search" placeholder="Search..." onChange={value=> onChangeText(value)}/>
  </div>
  )
}

export default Search