import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftFromLine, Key, LockIcon, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EditPassword() {
    
  const navigate = useNavigate();
  const [steps, setSteps] = useState(2);
  const [showPassword ,setShowPassword] = useState(false)


  return (
    <section className="w-full bg-gray-100  min-h-4xl flex flex-col justify-around gap-3 items-center p-6">
      <div className=" w-full">
        <ArrowLeftFromLine
          onClick={() => navigate("/signin")}
          size={30}
          className="hover:scale-105 transition-all duration-150 ease cursor-pointer rounded-full bg-gray-200 p-2"
        />
      </div>
      {/* for step -> 1 */}

      {steps === 1 && (
        <Card className="w-full max-w-sm py-10">
          <CardHeader>
            <div className="flex flex-col items-center">
              <span className="bg-gray-100 p-2 rounded-full border">
                <Key
                  size={30}
                  className="border rounded-full p-1 text-purple-500 font-extrabold"
                />
              </span>
              <h1 className="font-semibold text-2xl sm:text-3xl tracking-tighter py-0.7">
                Forget Password ?
              </h1>
            </div>
            <CardDescription>
              <p className="text-xs text-gray-400 px-3 text-center">
                we'll send you 4 digit OTP.
              </p>
            </CardDescription>
          </CardHeader>
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
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Send OTP
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* step -> 2 */}
      {steps === 2 && (
        <Card className="w-full max-w-sm py-10">
          <CardHeader>
            <div className="flex flex-col items-center">
              <span className="bg-gray-100 p-2 rounded-full border">
                <Shield 
                  size={30}
                  className="border rounded-full p-1 text-purple-500 font-extrabold"
                />
              </span>
              <h1 className="font-semibold text-2xl sm:text-3xl tracking-tighter py-0.7">
                Verify OTP
              </h1>
            </div>
            <CardDescription>
              <p className="text-xs text-gray-400 px-3 text-center">
                Enter 4 digit verification code.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id=""
                    type="text"
                    placeholder="enter code here..."
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* step -> 3*/}
      {steps === 3 && (
        <Card className="w-full max-w-sm py-10">
          <CardHeader>
            <div className="flex flex-col items-center">
              <span className="bg-gray-100 p-2 rounded-full border">
                <LockIcon 
                  size={30}
                  className="border rounded-full p-1 text-purple-500 font-extrabold"
                />
              </span>
              <h1 className="font-semibold text-2xl sm:text-3xl tracking-tighter py-0.7">
                Reset Your password
              </h1>
            </div>
            <CardDescription>
              <p className="text-xs text-gray-400 px-3 text-center">
                Enter your new password.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="*******"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </CardFooter>
        </Card>
      )}
    </section>
  );
}

export default EditPassword;
