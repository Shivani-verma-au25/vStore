import { LogOut, Menu, ShoppingCart, SquareUser, Heart } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideBar() {
  const { users } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/dashboard/user/profile", label: "Profile", icon: <SquareUser /> },
    { to: "/dashboard/user/order", label: "Orders", icon: <SquareUser /> },
    { to: "/dashboard/user/wishlist", label: "Wishlist", icon: <Heart /> },
    { to: "/dashboard/user/cart", label: "Cart", icon: <ShoppingCart /> },
  ];

  return (
    <>
      {/* Topbar for mobile */}
      <div className=" lg:hidden flex  items-start  shadow-sm  sticky top-0 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
        {/* <h1 className="font-semibold text-lg">{users?.name || "User Name"}</h1> */}
      </div>

      {/* Sidebar for large screens */}
      <div className="hidden lg:block w-64 h-screen border-r border-gray-200 p-5 shadow-md bg-white">
        <div className="mb-6">
          <h1 className="text-xl font-bold">{users?.name || "User Name"}</h1>
          <p className="text-sm text-gray-500">{users?.email || "email@example.com"}</p>
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-lg font-medium ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-10">
          <button className="flex items-center gap-2 p-2 rounded-md text-red-600 hover:bg-red-100 transition">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-40">
          <aside className="fixed top-0 left-0 w-64 h-full bg-white p-5 shadow-lg rounded-r-xl z-50">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">{users?.name || "User Name"}</h1>
              <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-lg font-medium ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {icon}
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            <div className="mt-10">
              <button className="flex items-center gap-2 p-2 rounded-md text-red-600 hover:bg-red-100 transition">
                <LogOut />
                <span>Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default SideBar;
