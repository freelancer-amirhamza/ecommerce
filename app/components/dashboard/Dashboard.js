import { selectUser } from '@/app/redux/slices/authSlice'
import React from 'react'
import { useSelector } from 'react-redux'


const Dashboard = () => {
  const user = useSelector(selectUser)
  return (
   <div className="">
    <h1 className='text-center text-2xl font-bold mb-2' >Hi. {user?.name},  Welcome to your Dashboard</h1>
    <div className="flex flex-col items-center gap-4 mt-5">
        <img src={user?.image} loading='lazy' className='rounded' alt="" />
        <div className='text-center' >
        <h2 className="text-3xl text-bold">{user?.name}</h2>
        <h3 className="text-lg text-semibold text-primary mt-1">{user?.email}</h3>
        </div>
        </div>
   </div>
  )
}

export default Dashboard