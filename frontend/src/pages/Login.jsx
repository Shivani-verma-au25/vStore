import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosInstance } from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/store/authSlice";

function Login() {
  const { loading, users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpenPass, setIsOpenPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const resp = await AxiosInstance.post("/v1/user/login", formData);

      if (resp?.data?.success === true) {
        toast.success(resp.data?.message);
        dispatch(setUser(resp.data?.user));
        navigate(resp.data?.user?.role === "admin" ? "/dashboard/admin" : "/");
      }

      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error in login:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 md:p-10 rounded-2xl shadow-2xl min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Left Image */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop"
          alt="Fashion"
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-12">
        <Card className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md rounded-xl w-full">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-white">Login to Your Account</h1>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <Label htmlFor="email" className="block mb-1 text-gray-700 dark:text-white/80">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeInput}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Label htmlFor="password" className="block mb-1 text-gray-700 dark:text-white/80">Password</Label>
                <Input
                  type={isOpenPass ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={onChangeInput}
                  placeholder="••••••••"
                  required
                  className="w-full pr-10 bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setIsOpenPass(!isOpenPass)}
                  className="absolute right-3 top-9 text-gray-500 dark:text-white/50"
                  aria-label="Toggle Password Visibility"
                >
                  {isOpenPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer text-white font-semibold"
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <Loader2 className="animate-spin w-5 h-5" />
                    Signing In...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-blue-600 hover:underline dark:hover:text-white"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
