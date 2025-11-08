import React from "react";
import { Star } from "lucide-react"; // optional icon for rating

function ShopCard({
  name = "Pizza Palace",
  image = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  type = "Italian Cuisine",
  rating = 4.5,
}) {
  return (
    <div className="w-64 md:w-72 bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-gray-800 shadow">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          {rating}
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{type}</p>
      </div>
    </div>
  );
}

export default ShopCard;
