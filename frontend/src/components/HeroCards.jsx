import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

function HeroCards() {
  return (
    <div className="p-2 flex justify-center">
      <Card className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[320px] p-4 rounded-xl shadow-sm bg-white">
        {/* Image */}
        <div className="flex justify-center items-center overflow-hidden mb-4">
          <img
            className="w-52 h-52 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Product"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium tracking-wide">Frill Top</h5>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Women</span>
            <span className="font-semibold text-black">$200</span>
          </div>

          {/* Size and Actions */}
          <div className="flex justify-between items-center mt-3">
            <select className="border rounded px-2 py-1 text-sm outline-none">
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            <div className="flex gap-2 items-center">
              <Button variant="ghost" size="sm" className="text-sm">
                Cart
              </Button>
              <Heart className="size-5 cursor-pointer hover:text-red-500 transition-colors duration-200" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default HeroCards;
