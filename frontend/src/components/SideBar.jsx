import { LogOut, SquareUser } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideBar() {
  const { users } = useSelector((state) => state.auth);
//   const role = users.role;
  
  

  return (
    <div className="hidden md:hidden lg:block max-w-xs h-screen w-screen border-r border-gray-400 p-4 ">
      <div className="">
        <h1 className="text-2xl font-bold">User name</h1>
        <p className="text-gray-600 font-semibold text-sm">Email@email.com</p>
      </div>
      <hr className="my-6 h-0.5 bg-gray-400" />

      {/* navigation */}

      <div className="text-center space-x-3 py-5 flex flex-col justify-between ">
        {/* {users?.role === 'admin' ? (
          <>
            <NavLink
              to="/dashboard/user/profile"
              className={({ isActive }) =>
                `text-2xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }
            >
              <SquareUser />
              <span className="">Profile</span>
            </NavLink>
          </> */}
        {/* ) : ( */}
          <>
            <NavLink
              to="/dashboard/user/profile"
              className={({ isActive }) =>
                `text-2xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }
            >
              <SquareUser />
              <span className="">Profile</span>
            </NavLink>
            <NavLink
              to="/dashboard/user/order"
              className={({ isActive }) =>
                `text-2xl ${
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900 text-gray-200"
                    : "bg-transparent"
                } flex items-center mb-2 gap-2 font-bold cursor-pointer rounded-2xl p-3 `
              }
            >
              <SquareUser />
              <span className="">Orders</span>
            </NavLink>
          </>
        {/* )} */}
      </div>

      {/* logout */}
      <div className="mt-90 ml-65">
        <LogOut />
      </div>
    </div>
  );
}

export default SideBar;
