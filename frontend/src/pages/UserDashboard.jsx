import SideBar from '@/components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function UserDashboard() {
  return (
     <div className='max-w-6xl mx-auto flex border border-gray-600 rounded-xl my-10 ' >
        <SideBar />
        <div className='flex-1'>
            <Outlet/>
        </div>
    </div>
  )
}

export default UserDashboard