import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUsersData } from "@/redux/authSlice";

function Signin() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // onchange handler
  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }


  // submit handler 
  const signinHandler = async (e) =>{
    dispatch(setLoading(true))
    e.preventDefault()    
    try {
      const resp = await AxiosInstance.post('/v1/user/signin',formData)
      if(resp?.data?.success === true){
        // TODO save data in redux
        dispatch(setUsersData(resp?.data))
        toast.success(resp?.data?.message)
        navigate('/')
      }
      setFormData({
        email : '',
        password : ""
      })
    } catch (error) {
      console.log("error in sigin page ",error);
      toast.error(error.response?.data?.message)
      dispatch(setLoading(false))
    }finally{
      dispatch(setLoading(false))
      setFormData({
        email : '',
        password : ""
      })

    }
  }

  return (
    <div className="w-full ">
      <div className=" w-full h-screen relative sm:block">
        <img src="./signup.jpg" alt="" className="w-full h-full object-cover" />
        <div className="p-3 w-full sm:w-2xl h-screen absolute top-0 sm:right-0 z-50">
          {/* sign form */}

          <div className="p-3 h-screen flex items-center justify-start mt-10 sm:mt-20 flex-col gap-10 ">
            <div className="py-2">
              <h1 className="font-bold text-4xl text-center py-1">
                Welcome Back User!
              </h1>
              <p className="text-lg font-normal text-center">
                Don't have an account?
                <Link to={"/signup"} className="text-xl font-bold">
                  Sign up
                </Link>
              </p>
            </div>

            {/* form start */}
            <Card className="w-full max-w-sm ">
              <CardContent>
                <form  onSubmit={signinHandler}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        onChange={onChangeHandler}
                        value={formData.email}
                      />
                    </div>
                    <div className="grid gap-2 relative">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          to={"/forget-password"}
                          className="ml-auto inline-block font-semibold text-xs sm:text-xs text-blue-700 underline-offset-4 "
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <Input
                        name="password"
                        placeholder="********"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        onChange={onChangeHandler}
                        value={formData.password}
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-9 right-2 cursor-pointer"
                      >
                        {showPassword ? (
                          <Eye size={20} />
                        ) : (
                          <EyeClosed size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                  <CardFooter className="flex-col  gap-2 py-4">
                    <Button type="submit" className="w-full">
                      {loading? <span className="flex justify-center items-center gap-1 text-xs "><Loader2 size={20} className="  transition-all animate-spin duration-100 ease-linear " /> Loading...</span> : 'Sign in' }
                    </Button>
                    <Button variant="outline" className="w-full cursor-pointer">
                      Login with Google
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
