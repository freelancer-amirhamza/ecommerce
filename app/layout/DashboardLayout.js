import React from 'react'
import DashboardWrapper from '../components/dashboard/DashboardWrapper'
import Breadcrumb from '../components/shared/Breadcrumb'
import Auth from '../components/auth'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/authSlice'

const DashboardLayout = ({children}) => {
  const user = useSelector(selectUser)
  return (
    <main>
    <div className="bg-[#F5F5F5] py-5">
      <div className="mx-auto max-w-5xl ">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "My Account" }]}
        />
      </div>
    </div>
    {user ?(
    <DashboardWrapper>
    {children}
    </DashboardWrapper>
    ):(
      <Auth/>
    )}
    
  </main>
  )
}

export default DashboardLayout