import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/authSlice'
import Breadcrumb from '../components/shared/Breadcrumb'
import Auth from '../components/auth'


const SecureLayout = ({children}) => {
    const user = useSelector(selectUser)
    return (
      <main>
    
      {user ?(
      <>
      {children}
      </>
      ):(
        <>
        <div className="bg-[#F5F5F5] py-5">
        <div className="mx-auto max-w-5xl ">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "My Account" }]}
          />
        </div>
      </div>

        <Auth/>
        
        </>
      )}
      
    </main>
    )
  }

export default SecureLayout