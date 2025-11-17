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
import {
  ArrowLeftFromLine,
  Eye,
  EyeClosed,
  Key,
  LockIcon,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";

function ForgetPassword() {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword ,SetShowConfirmPassword] = useState(false)
  const [email ,setEmail] = useState('')
  const [otp ,setOtp] = useState('')
  const [newPassword ,setNewPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  
 
  // send top controller
  const sendOTPHandler = async () => {
    try {
      const resp = await AxiosInstance.post('/v1/user/send-otp',{email});
      console.log("res send otp",resp);
      console.log(FormData);
      
    } catch (error) {
      console.log("Error in send otp in forget password" , error);
      toast.error(error?.response?.data?.message) 
    }
  }

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
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button onClick={sendOTPHandler}
            type="submit" className="w-full">
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
              <>
                <div className="grid gap-1 relative">
                  <Label htmlFor="email">Password</Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    required
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-7 right-2 cursor-pointer"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                  </div>
                </div>
                <div className="grid gap-2 py-2 relative">
                    <Label htmlFor="confirm password">Comfirm Password</Label>
                    <Input
                      id="Confirm password"
                      type={showconfirmPassword ? 'text' : "password"}
                      placeholder="Enter confirm password"
                      required
                      name=""
                      // value={confirmPass}
                      // onChange={(e) =>setConfirmPass(e.target.value)}
                    />
                    <div
                      onClick={() => SetShowConfirmPassword(!showconfirmPassword)}
                      className="absolute top-9 right-2 cursor-pointer"
                    >
                      {showconfirmPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
                    </div>
                  </div>
              </>
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

export default ForgetPassword;
