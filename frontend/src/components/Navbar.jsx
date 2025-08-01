import { Heart, Menu, ShoppingCart } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "../contant/index";
import { Avatar, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLoading } from "@/store/authSlice";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";

function Navbar() {
  const { users, loading } = useSelector((stste) => stste.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      dispatch(setLoading(true));
      const res = await AxiosInstance.post("/v1/user/logout");
      navigate("/login");
      dispatch(logout());
      toast.success(res?.data?.message || "Logged out successfully");
    } catch (error) {
      console.log("Error in logout", error);
      toast.error(error?.response?.data?.message || "Logout failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader className="size-20 animate-spin transition-all duration-150" />
        <span className="text-2xl font-semibold">Loading...</span>
      </div>
    );

  return (
    <nav className="w-full max-w-7xl mx-auto py-5 lg:px-10 px-5 flex justify-between items-center  bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-red-800 object-cover"
          src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"
          alt="Store Logo"
        />
        <p className="text-2xl font-bold tracking-wide uppercase">Store</p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-10 text-md font-semibold tracking-wider">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="cursor-pointer hover:text-green-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Right Side for Desktop */}
      <div className="hidden lg:flex items-center ">
        {users ? (
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Avatar className="size-10 cursor-pointer hover:scale-105 transition-all ease-in-out duration-150">
                    <AvatarImage
                      className="w-full h-full object-cover"
                      src="https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=1974&auto=format&fit=crop"
                      alt="User avatar"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>{users.name}</p>
              </TooltipContent>
            </Tooltip>

            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() =>
                    users.role === "admin"
                      ? navigate("/dashboard/admin")
                      : navigate("/dashboard/user/profile")
                  }
                >
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/")}>
                  Orders
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline">Signup</Button>
            </Link>
          </>
        )}
        <Link
          to={"/cart"}
          className=" border border-green-600 ml-15 size-10 flex justify-center items-center "
        >
          <ShoppingCart className=" cursor-pointer hover:text-green-600" />
        </Link>
        <Link
          to={"/wishlist"}
          className=" border border-green-600 ml-1 size-10 flex justify-center items-center "
        >
          <Heart className=" cursor-pointer hover:text-green-600" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Auth Buttons on Small Screens */}
        {!users && (
          <div className="flex gap-2">
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="sm">
                Signup
              </Button>
            </Link>
          </div>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className="text-green-600 border border-green-600 size-10 p-2 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuGroup>
              {navItems.map((item, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link to={item.path} className="w-full">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}

              {users && (
                <>
                  <DropdownMenuItem>
                    <Link to="/dashboard/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutUser}>
                    Log out
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
