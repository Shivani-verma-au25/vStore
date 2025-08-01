import React, { useReducer, useRef } from "react";
import { Card } from "./ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Dock, File, Upload } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Profile() {
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    // Handle file upload logic here (e.g., send to backend or preview image)
  };
  return (
    <Card className="min-w-xs px-3 mx-auto sm:ml-5  md:ml-15 md:my-10 shadow-lg  md:max-w-xl lg:max-w-xl md:w-6xl lg:py-20 xl:max-w-2xl ">
      <div className="flex">
        {/* left side */}
        <div className="w-3/4 lg:w-3/4 mx-auto border border-gray-200 shadow-2xl rounded-xl  flex justify-center items-center flex-col py-5 md:mx-auto relative">
          <Avatar>
            <AvatarImage
              className="size-20 md:size-32 lg:size-24  rounded-full"
              src="https://images.unsplash.com/photo-1752384876719-5f0b48b163ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
          {/* Hidden file input */}
          <Input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Upload button over avatar */}
          <div
            onClick={handleUploadClick}
            className=" size-8 mr-7 top-5 md:mr-24 hover:shadow-2xl cursor-pointer absolute md:size-10 flex justify-center items-center right-10 md:top-28 lg:top-20 lg:right-24 rounded-full bg-black"
          >
            <Upload className="size-5  text-white" />
          </div>

          <h1 className="text-lg py-1 font-bold md:text-xl lg:text-2xl ">User name</h1>
          <p className="text-xs text-gray-500 py-1 lg:py-1 md:text-md">Email@email.com</p>
          <p className="text-xs text-gray-500 py-1 lg:py-1 md:text-md">+91 923456666</p>
          {/* <Button className="mt-5"></Button> */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className='mt-5 cursor-pointer md:text-xl md:p-6 lg:text-sm lg:p-3' >Edit Profile</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name</Label>
                  <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Phone</Label>
                  <Input 
                  type='phone'
                  name='phone'
                  id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">User Photo</Label>
                  <Input 
                  id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Card>
  );
}

export default Profile;
