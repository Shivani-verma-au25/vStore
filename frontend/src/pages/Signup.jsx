import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";

function Signup() {
  const navigate = useNavigate();
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [showSecretInput, setShowSecretInput] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    secretCode: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await AxiosInstance.post("/v1/user/register", formData);
      if (resp?.data?.success) {
        toast.success(resp.data?.message);
        navigate("/login");
      }
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        secretCode: "",
      });
    } catch (error) {
      console.error("Error in signup", error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 py-10 bg-gray-50 dark:bg-gray-900">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
        <img
          className="w-[90%] max-h-[600px] rounded-xl object-cover object-top shadow-lg"
          src="https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?w=600&auto=format&fit=crop&q=60"
          alt="Sign up visual"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              Create an Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <Label className='py-2' htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={onChangeInput}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label className='py-2' htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={onChangeInput}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label className='py-2' htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={onChangeInput}
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Label className='py-2' htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type={isOpenPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={onChangeInput}
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsOpenPass(!isOpenPass)}
                  className="absolute right-3 top-9 text-gray-500 dark:text-gray-400"
                >
                  {isOpenPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>

              {/* Optional Secret Code Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowSecretInput(!showSecretInput)}
                  className="text-sm flex items-center gap-1 text-blue-600 hover:underline cursor-pointer"
                >
                  <ShieldCheck size={16} />
                  {showSecretInput
                    ? "Hide Admin Secret"
                    : "Registering as Admin?"}
                </button>
              </div>

              {/* Secret Code */}
              {showSecretInput && (
                <div>
                  <Label htmlFor="secretCode">Admin Secret Code</Label>
                  <Input
                    id="secretCode"
                    name="secretCode"
                    placeholder="Enter secret code"
                    value={formData.secretCode}
                    onChange={onChangeInput}
                  />
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                className="w-full cursor-pointer transition"
              >
                Sign Up
              </Button>

              {/* Link to login */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
