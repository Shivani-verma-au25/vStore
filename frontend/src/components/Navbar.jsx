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
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className="w-full  relative p-6 shadow-md rounnded-xl ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl cursor-pointer ">Logo</div>

        {/* Links (visible on larger screens) */}
        <div className="hidden sm:flex sm:gap-6 font-semibold">
          <Link to={'/'} className="hover:text-gray-500 transition-colors">Home</Link>
          <Link to={'/food'} className="hover:text-gray-500 transition-colors">Food</Link>
          <Link to={'/contact'} className="hover:text-gray-500 transition-colors">Contact</Link>
        </div>

        {/* Buttons & Search */}
        <div className="flex items-center gap-3 relative">
          {/* Shopping Cart */}
          <ShoppingCart size={20} className="cursor-pointer hover:text-white transition-colors" />

          {/* Search Icon + Input */}
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setShowInput(!showInput)}
              className="flex items-center justify-center"
            >
              <SearchIcon  size={20} className="size-5 text-gray-600 cursor-pointer hover:scale-110 transition-transform" />
            </button>

            {/* Search Input (toggle visible) */}
            {showInput && (
              <div className="absolute top-10 right-0 sm:top-10 sm:right-0 z-50 flex items-center bg-gray-50 rounded-md shadow-md px-2">
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

          {/* Auth Buttons (hidden on mobile) */}
          <div className="hidden sm:flex gap-2">
            <Button 
            onClick={() => navigate('/signup')}
            className="bg-black text-white hover:bg-gray-800 cursor-pointer">Sign Up</Button>
            <Button 
             onClick={() => navigate('/signin')}
            className="bg-white text-black hover:bg-gray-200 cursor-pointer">Sign In</Button>
          </div>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu className="block sm:hidden border p-1 border-gray-800 rounded-sm hover:bg-black hover:text-white cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Home className="mr-2" />
                  <Link to={'/'}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HandPlatter className="mr-2" />
                  <Link to={'/food'}>Food</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Contact2 className="mr-2" />
                  <Link to={'/contact'}>Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to={'/signup'}>Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={'/signin'}>Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
