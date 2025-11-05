import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";

function Signin() {
  const [showPassword ,setShowPassword] = useState(false);
  
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
                <Link to={'/signup'} className="text-xl font-bold">Sign up</Link>
              </p>
            </div>

            {/* form start */}
            <Card className="w-full max-w-sm ">
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2 relative">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          href="#"
                          className="ml-auto inline-block font-semibold text-xs sm:text-sm underline-offset-4 "
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <Input id="password" type={showPassword ? 'text' : 'password'} required />
                      <div 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-9 right-2 cursor-pointer">{showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}</div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
                <Button variant="outline" className="w-full cursor-pointer">
                  Login with Google
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
