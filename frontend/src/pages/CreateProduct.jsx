import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

function CreateProduct() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Add New Product</h2>
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Publish Now</Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Left Form */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <Label className="text-white/70">Title</Label>
            <Input
              placeholder="Loom Stars Original T-Shirt"
              className="mt-2 bg-[#1a1c2c] border-gray-700 text-white"
            />
          </div>

          {/* Description */}
          <div>
            <Label className="text-white/70">Description</Label>
            <Textarea
              placeholder="Short-sleeved T-shirt with round neck..."
              className="mt-2 bg-[#1a1c2c] border-gray-700 text-white"
            />
          </div>

          {/* Category */}
          <div>
            <Label className="text-white/70">Category</Label>
            <Select>
              <SelectTrigger className="mt-2 bg-[#1a1c2c] border-gray-700 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1c2c] text-white border-gray-700">
                <SelectItem value="tshirt">T-Shirt</SelectItem>
                <SelectItem value="hoodie">Hoodie</SelectItem>
                <SelectItem value="pants">Pants</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Images */}
          <div>
            <Label className="text-white/70">Pictures</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {[1, 2, 3].map((i) => (
                <Avatar key={i} className="size-14">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                    alt="Preview"
                    className="object-cover"
                  />
                </Avatar>
              ))}
              <div className="size-14 bg-[#1a1c2c] border border-gray-700 flex items-center justify-center text-gray-500 text-xl cursor-pointer rounded-md">
                +
              </div>
            </div>
          </div>

          {/* Price */}
          <div>
            <Label className="text-white/70">Price</Label>
            <Input
              placeholder="$120"
              type="number"
              className="mt-2 bg-[#1a1c2c] border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Right Preview */}
        <Card className="bg-[#1a1c2c] border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
              alt="Preview"
              className="rounded-md object-cover w-full h-64"
            />
            <div className="text-xl font-semibold">Loom Stars Original T-Shirt</div>
            <div className="text-gray-400">$120</div>
            <div className="flex items-center gap-3 flex-wrap">
              <span>Size:</span>
              <Button variant="outline" size="sm">S</Button>
              <Button variant="outline" size="sm">M</Button>
              <Button variant="outline" size="sm">L</Button>
            </div>
            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <span>Color:</span>
              {["black", "gray", "green", "purple", "blue"].map((color) => (
                <div
                  key={color}
                  className={`size-5 rounded-full bg-${color}-500 border border-white/10`}
                ></div>
              ))}
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">Add To Cart</Button>
            <p className="text-sm text-gray-400 leading-6">
              Short-sleeved T-shirt with round neck.<br />
              Thickness: 135 – 145 g/m².
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default CreateProduct
