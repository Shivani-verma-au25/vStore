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

function Signup() {
  const [showPassword ,setShowPassword] = useState(false);
  return (
    <div className="w-full ">
      <div className=" w-full h-screen relative sm:block">
        <img src='./signup.jpg' alt=""  className='w-full h-full object-cover' />
        <div className="p-3 w-full sm:w-2xl h-screen absolute top-0 sm:right-0 z-50">
          {/* sign form */}

          <div className="p-3 h-screen flex items-center flex-col gap-4 ">
            <div className="py-2">
              <h1 className="font-bold text-4xl text-center py-1">Welcome</h1>
              <p className="text-lg font-normal text-center">
                Don't have an account?
                <Link to={'/signin'} className="text-xl font-bold">Sign In</Link>
              </p>
            </div>

            {/* form start */}
            <Card className="w-full max-w-sm ">
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-1">
                      <Label htmlFor="email">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Deo"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="email">Phone No.</Label>
                      <Input
                        id="email"
                        type='mobile'
                        placeholder="91 12345677"
                        required
                      />
                    </div>
                    <div className="grid gap-1 relative">
                      <Label htmlFor="email">Password</Label>
                        <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder=""
                        required
                      />
                      <div 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-7 right-2 cursor-pointer">{showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}</div>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                      <Label htmlFor="email" className='text-md '>I am a </Label>
                      <Button className='px-1 text-xs sm:text-md cursor-pointer'>User</Button>
                      <Button className='px-1 text-xs sm:text-md cursor-pointer'>Owner</Button>
                      <Button className='px-1 text-xs sm:text-md cursor-pointer'>Delivery</Button>
                    </div>
                    
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Sign up
                </Button>
                <Button variant="outline" className="w-full">
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

export default Signup;
