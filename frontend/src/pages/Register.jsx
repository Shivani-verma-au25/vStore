// import React from 'react'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Link } from 'react-router-dom'


// function Register({link}) {
  
//   return (
//     <div>
//       <Dialog>
//       <DialogTrigger asChild>
//         <Button className="cursor-pointer">Signup</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Create an Account</DialogTitle>
//           <DialogDescription>
//             Sign up to get access to exclusive features.
//           </DialogDescription>
//         </DialogHeader>

//         {/* Signup Form */}
//         <form className="space-y-4">
//           <div>
//             <Label className='py-2' htmlFor="name">Name</Label>
//             <Input id="name" type="text" placeholder="Enter your name" required />
//           </div>
//           <div>
//             <Label className='py-2' htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="Enter your email" required />
//           </div>
//           <div>
//             <Label className='py-2' htmlFor="password">Password</Label>
//             <Input id="password" type="password" placeholder="Enter a password" required />
//           </div>
//         </form>
//         <span>Alreay have an Account? <Link to={'/login'}>Login</Link> </span>

//         <DialogFooter className="mt-4">
//           <Button type="submit">Create Account</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//     </div>
//   )
// }

// export default Register