import {
  Contact2,
  HandPlatter,
  Home,
  Menu,
  SearchIcon,
  ShoppingCart,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useActionData, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useDispatch, useSelector } from "react-redux";
import { AxiosInstance } from "@/utils/axios";
import { setUsersData } from "@/redux/authSlice";
import { toast } from "sonner";

function NavBar() {
  useCurrentUser();
  const [showInput, setShowInput] = useState(false);
  const [isLogged, setISlogged] = useState(false);
  const [user, setUser] = useState("user");
  const disptach = useDispatch()
  const navigate = useNavigate();
  const { usersData } = useSelector((state) => state.auth);

  // handle Logout button
  const handleSignOut = async()=>{
    try {
      const res = await AxiosInstance.post('/v1/user/signout');
      disptach(setUsersData(null));
      toast.success(res?.data.message)

    } catch (error) {
      console.log("error in logout handler" ,error);
      
    }
  }

  return (
    <nav className="w-full relative p-6 shadow-md rounded-xl bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl cursor-pointer">
          Logo
        </div>

        {/* Links (visible on larger screens) */}
        {usersData?.role === 'user' ? (
          <div className="hidden sm:flex sm:gap-6 font-semibold">
            <Link to="/" className="hover:text-gray-500 transition-colors">
              Home
            </Link>
            <Link to="/food" className="hover:text-gray-500 transition-colors">
              Food
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </Link>
          </div>
          ) : usersData?.role === 'owner' ? '' : (
              <div className="hidden sm:flex sm:gap-6 font-semibold">
            <Link to="/" className="hover:text-gray-500 transition-colors">
              Home
            </Link>
            <Link to="/food" className="hover:text-gray-500 transition-colors">
              Food
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </Link>
          </div>
          )}


        {/* Buttons & Search */}
        <div className="flex items-center gap-3 relative">
          {/* Shopping Cart  appears only in users*/}
          {usersData?.role === "user" && (
            <ShoppingCart
              size={20}
              className="cursor-pointer hover:text-gray-700 transition-colors"
            />
          )}

          {/* Search Icon + Input */}
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setShowInput(!showInput)}
              className="flex items-center justify-center"
            >
              <SearchIcon
                size={20}
                className="text-gray-600 cursor-pointer hover:scale-110 transition-transform"
              />
            </button>

            {/* Search Input (toggle visible) */}
            {showInput && (
              <div className="absolute top-10 right-0 z-50 flex items-center bg-gray-50 rounded-md shadow-md px-2">
                <p className="text-xs font-semibold p-1 sm:text-md">Lucknow</p>
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-48 sm:w-64 px-1 text-gray-700 outline-none border-none focus-visible:ring-0"
                  autoFocus
                  onBlur={() => setShowInput(false)}
                />
                <X
                  className="size-5 text-gray-500 ml-2 cursor-pointer hover:text-black transition-colors"
                  onClick={() => setShowInput(false)}
                />
              </div>
            )}
          </div>

          {/* Auth/Profile Section */}
          <div className=" sm:flex gap-2">
            {usersData ? (
              // ✅ When logged in → show profile popover
              <Popover>
                <PopoverTrigger>
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-pink-600 text-white text-sm shadow-xl font-semibold cursor-pointer ml-1">
                    {usersData?.name?.slice(0, 1).toUpperCase()}
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-44 mt-3">
                  <p className="font-semibold text-sm py-1 capitalize border-b pb-2 mb-2">
                    {usersData?.name} {usersData?.role=== 'owner' ? "Owner" : ""}
                  </p>

                  <div className="flex flex-col sm:hidden gap-2 text-sm">
                    <Link
                      to="/"
                      className="flex  items-center gap-2 hover:text-pink-600 transition-colors"
                    >
                      <Home size={16} /> Home
                    </Link>
                    <Link
                      to="/food"
                      className="flex items-center gap-2 hover:text-pink-600 transition-colors"
                    >
                      <HandPlatter size={16} /> Food
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 hover:text-pink-600 transition-colors"
                    >
                      <Contact2 size={16} /> Contact
                    </Link>
                  </div>

                  <div
                    onClick={handleSignOut}
                    className="text-pink-600 font-semibold text-sm mt-3 cursor-pointer border-t pt-2"
                  >
                    Log Out
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              // ❌ When not logged in → show Sign In button
              <Button
                onClick={() => navigate("/signin")}
                className="hidden sm:block bg-black text-white hover:bg-gray-800 cursor-pointer"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu (only visible when not logged in) */}
          {!usersData && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu className="block sm:hidden border p-1 border-gray-800 rounded-sm hover:bg-black hover:text-white cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Home className="mr-2" />
                    <Link to="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HandPlatter className="mr-2" />
                    <Link to="/food">Food</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Contact2 className="mr-2" />
                    <Link to="/contact">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link  to="/signin">Sign In</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
