import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { AxiosInstance } from "@/utils/axios";
import { toast } from "sonner";
import { setLoading, setUsersData } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const roles = ["user", "owner", "delivery"];
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.auth);
  console.log("loading ...",loading);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    role: "",
  });

  // handle input change
  const onchangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle signup
  const signupSubmitHandler = async (e) => {
    e.preventDefault(); // prevent reload
    dispatch(setLoading(true))
    try {
      const resp = await AxiosInstance.post("/v1/user/signup", formData);
      if (resp?.data?.success === true) {
        // TODO : save data in redux
        dispatch(setUsersData(resp?.data?.users))
        navigate('/signin')
        toast.success(resp?.data?.message)
      }

      setFormData({
        name : "",
        email : "",
        password : "",
        phoneNo : "",
        role : ""
      })
    } catch (error) {
      toast.error(error.response?.data?.message ) 
      setLoading(false)
    }finally{
      dispatch(setLoading(false))
      setFormData({
        email : '',
        password : ""
      })
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-screen relative sm:block">
        <img src="./signup.jpg" alt="" className="w-full h-full object-cover" />
        <div className="p-3 w-full sm:w-2xl h-screen absolute top-0 sm:right-0 z-50">

          <div className="p-3 h-screen flex items-center flex-col gap-4">
            <div className="py-2">
              <h1 className="font-bold text-4xl text-center py-1">Welcome</h1>
              <p className="text-lg font-normal text-center">
                Don't have an account?
                <Link to={"/signin"} className="text-xl font-bold">
                  Sign In
                </Link>
              </p>
            </div>

            {/* form starts */}
            <Card className="w-full max-w-sm">
              <CardContent>

                {/* FORM STARTS HERE */}
                <form onSubmit={signupSubmitHandler}>
                  <div className="flex flex-col gap-6">

                    <div className="grid gap-1">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Deo"
                        required
                        onChange={onchangeHandler}
                        value={formData.name}
                      />
                    </div>

                    <div className="grid gap-1">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        onChange={onchangeHandler}
                        value={formData.email}
                      />
                    </div>

                    <div className="grid gap-1">
                      <Label htmlFor="phoneNo">Phone No.</Label>
                      <Input
                        name="phoneNo"
                        id="phoneNo"
                        type="text"
                        placeholder="91 12345677"
                        required
                        onChange={onchangeHandler}
                        value={formData.phoneNo}
                      />
                    </div>

                    <div className="grid gap-1 relative">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="*********"
                        required
                        onChange={onchangeHandler}
                        value={formData.password}
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-7 right-2 cursor-pointer"
                      >
                        {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                      </div>
                    </div>

                    {/* ROLES */}
                    <div className="grid grid-cols-4 gap-1">
                      <Label htmlFor="role">I am a</Label>
                      {roles.map((r, ind) => (
                        <Button
                          key={ind}
                          type="button"
                          onClick={() => setFormData({ ...formData, role: r })}
                          className={`px-1 text-xs sm:text-md cursor-pointer 
                            ${formData.role === r ? "bg-black text-white" : ""}`}
                        >
                          {r}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* SUBMIT BUTTON INSIDE FORM */}
                  <CardFooter className="flex-col gap-2 mt-4">
                    <Button type="submit" className="w-full">
                      {loading? <span className="flex justify-center items-center gap-1 text-xs "><Loader2 size={20} className="  transition-all animate-spin duration-100 ease-linear " /> Loading...</span> : 'Sign up' }
                      
                    </Button>

                    <Button variant="outline" className="w-full">
                      Login with Google
                    </Button>
                  </CardFooter>
                </form>
                {/* FORM ENDS HERE */}

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
