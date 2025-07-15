import { Menu, ShoppingCart, User } from "lucide-react";
import React  from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {navItems} from '../contant/index'
import Userlogin from "./Userlogin";



function Navbar() {
    const navigate = useNavigate()


  return (
    <nav className="w-full py-5 lg:px-10 px-5 flex justify-between items-center shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-red-800 object-cover"
          src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"
          alt="Store Logo"
        />
        <p className="text-2xl font-bold tracking-wide uppercase">Store</p>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-10 text-md font-semibold tracking-wider">
        {navItems.map((item,index) => (
          <Link to={item.path}
            key={index}
            className="cursor-pointer hover:text-green-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Right Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        {/* login sign up forget password */}
        < Userlogin />
        <ShoppingCart className="cursor-pointer hover:text-green-600 ml-4" />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center gap-2">
        <ShoppingCart className="cursor-pointer hover:text-green-600" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>    
              <Menu className="text-green-600 border border-green-600 size-10 p-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuGroup>
              {navItems.map((item,index) => (
                <DropdownMenuItem key={index} role="menuitem">
                  {item.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
