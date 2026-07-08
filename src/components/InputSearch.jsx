"use client"

import { useRouter,useSearchParams } from 'next/navigation'
import React from 'react'

const InputSearch = () => {
    const router = useRouter()
    const params = useSearchParams()
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const form = e.target
        const value = form.search.value;
        

        const newparams = new URLSearchParams(params.toString())
        newparams.set("search",value)
        router.push(`?${newparams.toString()}`)

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
