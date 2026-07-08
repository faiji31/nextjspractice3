"use client"
import React from 'react'

const InputSearch = () => {
    const handlesubmit=(e)=>{
        e.preventDefault();
        const form = e.target
        const value = form.search.value;
        console.log(value)

    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input name="search" className='px-1 py-3 border-2 rounded ' type="text" placeholder='Enter Food Name:' />
        <button className='p-4 m-4 bg-green-700 text-black rounded-2xl cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default InputSearch
