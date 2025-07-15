import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { User } from 'lucide-react'

function Userlogin() {
     const [mode, setMode] = useState("login"); // 'login' | 'signup' | 'forgot'
  return (
    <Dialog>
          <DialogTrigger asChild>
            <User className="cursor-pointer">
              {mode === "login" ? "Login" : mode === "signup" ? "Signup" : "Forgot Password"}
            </User>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-center text-xl sm:text-2xl leading-3'>
                {mode === "login"
                  ? "Login to your account"
                  : mode === "signup"
                  ? "Create an account"
                  : "Reset your password"}
              </DialogTitle>
              <DialogDescription className='text-center'>
                {mode === "login"
                  ? "Enter your credentials to continue."
                  : mode === "signup"
                  ? "Fill the form to create your account."
                  : "Enter your email to receive a reset link."}
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4">
              {mode === "signup" && (
                <div>
                  <Label className='py-2' htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" required />
                </div>
              )}

              <div>
                <Label className='py-2' htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>

              {(mode === "login" || mode === "signup") && (
                <div>
                  <Label className='py-2' htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Your password" required />
                </div>
              )}
            </form>

            {mode === "login" && (
              <div className="text-right text-sm mt-1">
                <span
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setMode("forgot")}
                >
                  Forgot password?
                </span>
              </div>
            )}

            <DialogFooter className=" mt-4 flex flex-col justify-between items-center gap-3 ">
              <p className="text-sm text-center">
                {mode === "login" ? (
                  <p className='text-xs'>
                    Don’t have an account?{" "}
                    <span
                      className=" font-bold text-blue-600 cursor-pointer hover:underline"
                      onClick={() => setMode("signup")}
                    >
                      Signup
                    </span>
                  </p>
                ) : mode === "signup" ? (
                  <p className='  w-full flex cursor-pointer text-xs'>
                    Already have an account?{" "}
                    <span
                      className="font-bold text-blue-600 cursor-pointer hover:underline"
                      onClick={() => setMode("login")}
                    >
                      Login
                    </span>
                  </p>
                ) : (
                  <>
                    Remembered your password?{" "}
                    <span
                      className="text-blue-600 cursor-pointer hover:underline"
                      onClick={() => setMode("login")}
                    >
                      Go to login
                    </span>
                  </>
                )}
              </p>
              <Button variant={'outline'} type="submit" className='bg-green-700 text-white cursor-pointer'>
                {mode === "login"
                  ? "Login"
                  : mode === "signup"
                  ? "Signup"
                  : "Send Reset Link"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
  )
}

export default Userlogin