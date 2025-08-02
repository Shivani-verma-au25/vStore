import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { LogOut, Menu, X, PackagePlus, Boxes, BarChart3, Users, Star, Settings } from 'lucide-react'

function AdminSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const { users } = useSelector((state) => state.auth)

  const navItems = [
    { path: '/dashboard/admin/createProduct', label: 'Add Products', icon: <PackagePlus className="w-5 h-5" /> },
    { path: '/dashboard/admin/allproducts', label: 'All Products', icon: <Boxes className="w-5 h-5" /> },
    { path: '/dashboard/admin/analatics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { path: '/dashboard/admin/Allcustomers', label: 'Customers', icon: <Users className="w-5 h-5" /> },
    { path: '#', label: 'Reviews', icon: <Star className="w-5 h-5" /> }
  ]

  const settingsItems = [
    { path: '#', label: 'Account Settings', icon: <Settings className="w-5 h-5" /> }
  ]

  return (
    <>
      {/* Mobile Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800 md:hidden bg-[#13141f]">
        <h1 className="text-xl font-bold text-white">Vstore</h1>
        <Menu onClick={() => setSidebarOpen(true)} className="text-white w-6 h-6 cursor-pointer" />
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[260px] bg-[#13141f] p-5 border-r border-gray-800 z-50 transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Close on Mobile */}
        <div className="md:hidden flex justify-end">
          <X className="text-white w-6 h-6 cursor-pointer mb-4" onClick={() => setSidebarOpen(false)} />
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Vstore</h2>

        {/* User Avatar */}
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="w-full h-full object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60"
              alt="admin-avatar"
            />
          </Avatar>
          <span className="text-white text-base font-semibold">{users?.name}</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 text-white">
          {navItems.map(({ path, label, icon }) => (
            <NavLink
              to={path}
              key={label}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 text-sm font-medium ${
                  isActive ? "bg-gray-800 text-white" : "hover:bg-gray-700/70 text-white/80"
                }`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Settings */}
        <div className="mt-8">
          <p className="text-white/70 text-sm font-semibold mb-2">ACCOUNT SETTINGS</p>
          <nav className="space-y-2">
            {settingsItems.map(({ path, label, icon }) => (
              <NavLink
                to={path}
                key={label}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 text-sm font-medium ${
                    isActive ? "bg-gray-800 text-white" : "hover:bg-gray-700/70 text-white/80"
                  }`
                }
              >
                {icon}
                {label}
              </NavLink>
            ))}
            <button
              className="flex items-center gap-2 p-3 text-white/80 hover:bg-red-600/70 rounded-xl w-full text-sm transition-all"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  )
}

export default AdminSidebar
