import ReviewSkeleton from '@/components/skeleton/ReviewCardSkeleton'
import React from 'react'

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {
        [...Array(12)].map((_,index)=> <ReviewSkeleton key={index} />)
      }
    </div>
  )
}

export default loading
