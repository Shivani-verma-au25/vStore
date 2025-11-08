import React from "react";

function CategoryCart({ name = "Pizza", image }) {
  return (
    <div className="w-40 md:w-48 lg:w-52 h-48 md:h-56 flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      {/* Image container */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-red-400 shadow-sm hover:scale-105 transition-transform duration-300">
        <img
          src={
            image ||
            "https://www.foodandwine.com/thmb/rsX2jxXsOkvByaQckcfIdLxD2Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg"
          }
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category Name */}
      <p className="mt-3 text-lg font-semibold text-gray-800 tracking-wide">
        {name}
      </p>
    </div>
  );
}

export default CategoryCart;
