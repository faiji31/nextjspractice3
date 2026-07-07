"use client"
import { CartContext } from '@/CartProvider'
import React from 'react'
import {useState,use} from 'react'




const CartButton = ({food}) => {

    const [incart,setIncart]=useState(false)
    const {addtoCart} = use(CartContext)
    const handleaddtoCart=()=>{
       addtoCart(food),
       setIncart(true)
    }

  return (
    
    <button onClick={handleaddtoCart} disabled={incart} href="/cart" className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:bg-gray-100 disabled:text-black">
            {
        incart ? "Added": "Add to Cart"
    }
          </button>
  )
}

export default CartButton
