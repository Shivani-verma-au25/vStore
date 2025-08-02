import { Heart, Menu, ShoppingCart, Loader } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "../contant/index";
import { Avatar, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLoading } from "@/store/authSlice";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function Navbar() {
  const { users, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      dispatch(setLoading(true));
      const res = await AxiosInstance.post("/v1/user/logout");
      dispatch(logout());
      toast.success(res?.data?.message || "Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error in logout", error);
      toast.error(error?.response?.data?.message || "Logout failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader className="w-12 h-12 animate-spin text-green-600" />
        <span className="ml-3 text-xl font-semibold">Loading...</span>
      </div>
    );

  return (
    <nav className="w-full max-w-7xl mx-auto py-4 px-4 lg:px-8 flex justify-between items-center border-b dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xl font-bold uppercase tracking-wide">Store</span>
      </Link>

      {/* Desktop Nav Items */}
      <ul className="hidden lg:flex gap-8 font-medium text-gray-700 dark:text-gray-100">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.path}
              className="hover:text-green-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Section for Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        {users ? (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="size-10 cursor-pointer hover:scale-105 transition-all">
                      <AvatarImage
                        src="https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=1974&auto=format&fit=crop"
                        alt="User"
                      />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel className="text-sm">
                      {users.name}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onClick={() =>
                          navigate(
                            users.role === "admin"
                              ? "/dashboard/admin"
                              : "/dashboard/user/profile"
                          )
                        }
                      >
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/orders")}>
                        Orders
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logoutUser}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent>
                <p>Account</p>
              </TooltipContent>
            </Tooltip>

            <Link to="/cart" className="relative group">
              <ShoppingCart className="size-6 hover:text-green-600" />
            </Link>
            <Link to="/wishlist" className="relative group">
              <Heart className="size-6 hover:text-green-600" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" variant="outline">
                Signup
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className="size-8 cursor-pointer text-green-600" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuGroup>
              {navItems.map((item, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator />

              {users ? (
                <>
                  <DropdownMenuItem
                    onClick={() =>
                      navigate(
                        users.role === "admin"
                          ? "/dashboard/admin"
                          : "/dashboard/user/profile"
                      )
                    }
                  >
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutUser}>Logout</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/signup">Signup</Link>
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
  