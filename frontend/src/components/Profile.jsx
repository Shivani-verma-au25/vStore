import React, { useRef } from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
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
    // You can handle preview or backend upload here
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6 sm:p-10 shadow-xl rounded-2xl">
      <div className="flex flex-col items-center gap-4 text-center relative">
        <div className="relative">
          <Avatar className="h-24 w-24 md:h-28 md:w-28 border-2 border-white shadow-md">
            <AvatarImage
              className="rounded-full object-cover"
              src="https://images.unsplash.com/photo-1752384876719-5f0b48b163ed?w=600"
              alt="User Avatar"
            />
          </Avatar>
          <Input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <div
            onClick={handleUploadClick}
            className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-gray-800 transition-all"
          >
            <Upload className="h-4 w-4" />
          </div>
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-semibold">User Name</h1>
          <p className="text-sm text-gray-500 mt-1">email@email.com</p>
          <p className="text-sm text-gray-500">+91 923456666</p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="mt-4">Edit Profile</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Update your profile details and save changes.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" defaultValue="+91 923456666" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="photo">Upload Photo</Label>
                <Input type="file" id="photo" />
              </div>
            </div>
            <SheetFooter className="mt-6">
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}

export default Profile;
