import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { LogOut, Menu } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const {users} =useSelector((state) => state.auth)

  return (
    <>
    <div className="flex justify-between md:hidden p-4 items-center border-b border-gray-800">
        <h1 className="text-xl font-bold">Vstore</h1>
        <Menu onClick={() => setSidebarOpen(true)} className="cursor-pointer" />
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[260px] bg-[#13141f] p-6 border-r border-gray-800 z-50 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Close Button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl">&times;</button>
        </div>
        <h1 className="text-2xl font-bold mb-6">Vstore</h1>
        <div className="h-15 w-15 rounded-full flex justify-center items-center gap-2 px-15">
          <Avatar className=''>
            <AvatarImage  className='w-full h-full object-cover' src='https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww' />
          </Avatar>
          {users?.name}
          </div>
        <div className="space-y-4">
          
          <ul className="space-y-2">
            <NavLink
            to='/dashboard/admin/createProduct'
             className={({ isActive }) =>
                `text-2xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }>Add Prodcuts</NavLink>

            <NavLink
            to='/dashboard/admin/allproducts'
             className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }>All Prodcuts</NavLink>  
            
            <NavLink 
            to={'/dashboard/admin/analatics'}
            className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }>Analytics</NavLink>
            <NavLink 
            to={'/dashboard/admin/Allcustomers'}
            className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }>Customers</NavLink>
            <NavLink className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }>Reviews</NavLink>
          </ul>
          <div className="mt-6 font-semibold text-white/90">ACCOUNT SETTINGS</div>
          <ul className="space-y-2">
            <NavLink className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }>Account settings</NavLink>
            <li className="text-white flex justify-start items-center gap-2 cursor-pointer" >Logout <LogOut className='size-4' /> </li>
          </ul>
        </div>
      </aside>

      {/* Overlay on mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

    
    </>
  )
}

export default AdminSidebar