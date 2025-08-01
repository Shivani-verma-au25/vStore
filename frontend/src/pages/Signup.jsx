import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";

function Signup() {
  const navigate = useNavigate();
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [showSecretInput , setShowSecretInput] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    phone: "",
    email: "",
    password: "",
    secretCode: '',
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
      if (resp?.data?.success === true) {
        toast.success(resp.data?.message);
        console.log("res", resp.data);

        navigate("/login");
      }
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        secretCode: '',
      });
    } catch (error) {
      console.error("Error in signup", error.message);
      toast.error(error.response.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-2 md:pt-14 md:min-h-[760px] rounded-xl shadow-xl bg-white dark:bg-gray-900 m-5">
      {/* Left side image */}
      <div className="hidden md:block flex-1">
        <img
          className="rounded-xl w-full h-full object-cover object-top"
          src="https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fHww"
          alt="Sign up visual"
        />
      </div>

      {/* Form section */}
      <div className="flex justify-center items-center flex-1 px-4">
        <Card className="w-full max-w-mdp-6 shadow-lg rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              Create an Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <Label className="py-1">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={onChangeInput}
                  required
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
              </div>

              {/* Email */}
              <div>
                <Label className="py-1">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={onChangeInput}
                  required
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
              </div>

              {/* Phone */}
              <div>
                <Label className="py-1">Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={onChangeInput}
                  required
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Label className="py-1">Password</Label>
                <Input
                  type={isOpenPass ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={onChangeInput}
                  required
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
                <Input
                  type="text"
                  name="secretCode"
                  placeholder="Admin Secret Code (Optional)"
                  value={formData.secretCode}
                  onChange={onChangeInput}
                  className="dark:border-gray-600 dark:bg-gray-900 mt-5"
                />

                <button
                  type="button"
                  onClick={() => setIsOpenPass(!isOpenPass)}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {isOpenPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full cursor-pointer">
                Sign Up
              </Button>

              {/* Link to login */}
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="underline font-semibold hover:text-gray-900 dark:hover:text-white"
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
