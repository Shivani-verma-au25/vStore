// import React from 'react'
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";

// function Login() {
//   return (
//      <Dialog>
//       <DialogTrigger asChild>
//         <Button className="cursor-pointer">Login</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Login to your account</DialogTitle>
//           <DialogDescription>
//             Enter your credentials to continue.
//           </DialogDescription>
//         </DialogHeader>

//         {/* Login Form */}
//         <form className="space-y-4">
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="Enter your email" required />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" placeholder="Enter your password" required />
//           </div>
//         </form>

//         <DialogFooter className="mt-4">
//           <Button type="submit">Login</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default Login