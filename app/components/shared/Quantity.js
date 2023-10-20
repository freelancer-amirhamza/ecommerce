import React from 'react'

const Quantity = ({decreaseQuantity, increaseQuantity, quantity}) => { 
  return (
    <>
         <div className="flex border h-10">
                    <button onClick={decreaseQuantity} className="w-10 h-full  flex items-center justify-center bg-[#F5F5F5]">
                      -
                    </button>
                    <div className=" flex flex-grow items-center 
                    justify-center">
                      {quantity}
                    </div>
                    <button onClick={increaseQuantity} className="w-10 h-full  flex items-center justify-center bg-[#F5F5F5]">
                      +
                    </button>
                  </div>
    </>
  )
}

export default Quantity