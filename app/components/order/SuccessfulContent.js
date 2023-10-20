import React, { useEffect } from 'react'
import Button from '../shared/Button'
import { useRouter } from 'next/router'

const SuccessfulContent = () => {
  const [IsTracking, setIsTracking] =React.useState(false)
  const router = useRouter()
  const { order_id } = router.query

  useEffect(() => {
    setTimeout(() => {
      setIsTracking(true)
    }, 3000)
  }, [])

  return (
    <div className='mb-5'>
       {!IsTracking ? (
      <> 
     <img className='mx-auto w-1/2' 
      src="/image/orderSuccess.gif"
      loading='lazy'
      alt="" />
      <h2 className='text-center text-lg font-semibold' >Thank You! Your Payment Was Successful 🙌 </h2>
      <h2 className='text-center text-lg font-semibold' >Processing order... </h2>
      </>
    ) : (
      <>
       <img className='mx-auto w-1/2 rounded-lg' 
      src="/image/order-complete.gif"
      loading='lazy'
      alt="" />
      <h2 className='text-center text-lg mt-6 font-semibold' >Order Successfully Completed 🙌 </h2>
      <h2 className='text-center text-base mt-2 font-semibold' >Your Order is on it's way 🏃‍♂️</h2>
      <h2 className='text-center text-base mt-2 ' ><strong className='text-xl'>Order Id: </strong>{order_id}</h2>
      <Button  onClick={() => router.push(`/my-account/orders?order_id=${order_id}`)}
      title="View Orders"
      className="md:w-1/2 w-full mx-auto py-3 mt-5 block"></Button>
      </>
    )}

    </div>
  )
}

export default SuccessfulContent