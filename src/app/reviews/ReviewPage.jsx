"use client"
import ReviewCard from '@/components/cards/ReviewCard'
import React, { useEffect, useState } from 'react'
import ReviewLoading from '@/app/reviews/Reviewloading'



const Reviews = () => {


  const [reviews,setReviews] =useState([])
  const [loading,setLoading]= useState(true)
  useEffect(()=>{
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
    .then(res=>res.json())
    .then(data=>
    {
      setReviews(data.reviews)
      setLoading(false)

    }
      
      )
    
  },[])
  if(loading){
    return <ReviewLoading></ReviewLoading>
  }
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
             {
              reviews.map((review)=> <div key={review.id}>
                <ReviewCard review={review} />
              </div>)
             }
      </div>
    </div>
  )
}

export default Reviews
