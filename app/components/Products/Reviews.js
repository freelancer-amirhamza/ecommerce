import React from 'react'

const Reviews = () => {
  return (
    <div className='flex items-start gap-10 flex-wrap md:flex-nowrap' >
      <div className="border p-5 md:w-2/6 w-full">
        <h1 className="text-orange font-bold md:text-5xl text-2xl">5.00</h1>
        <p>Your Rating: ⭐⭐⭐⭐⭐</p>
        <p className="text-sm">Based on 1 reviews</p>
      </div>
      <div className="py-5 md:py-0 flex-1">
        <h3 className="text-bold text-title text-lg">ADD YOUR REVIEWS</h3>
        <p>Your Rating: ⭐⭐⭐⭐⭐</p>
        <textarea placeholder='Your review'className="w-full border h-40 p-2 mt-2" />
        <button type="submit" className="bg-orange px-3 py-2 rounded text-white">Submit</button>
      </div>
    </div>
  )
}

export default Reviews