import HeroCards from "@/components/HeroCards";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

function Shop() {
  const no = [1, 2, 3, 4, 5, 7, 8, 9];
  return (
    <div className="max-w-6xl mx-auto ">
      <h1 className="text-3xl font-bold py-6 px-3">Shop</h1>
      <hr className="border-gray-200 border-b-1 mx-3" />

      {/* serach */}
      <div className="flex justify-end py-3" >
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button className='cursor-pointer' ><Search/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-2">
        {no.map((pro, indx) => (
          <HeroCards key={indx} item={pro} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
