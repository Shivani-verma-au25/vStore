import CategoryCart from "@/components/CategoryCart";
import ShopCard from "@/components/ShopCard";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

function UserDashboard() {
  return (
    <section className="w-full bg-white overflow-hidden py-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center relative bg-amber-500">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 px-10 py-20 ">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Are you
          </h2>
          <h1 className="text-6xl md:text-7xl font-extrabold text-red-600">
            Hungry?
          </h1>
          <p className="font-medium text-lg text-gray-700">
            We serve delicious food, made with love ❤️
          </p>
          <button className="mt-5 px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-full hover:bg-red-600 transition-all duration-300">
            Order Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <img
            src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-3d-character-delivery-png-image_11529203.png"
            alt="Delivery Person"
            className="w-[80%] md:w-[70%] drop-shadow-xl"
          />
        </div>
        {/* Wave Divider */}
        <div className="absolute -bottom-36  w-full -mt-2 ">
          <svg
            className="w-full "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#00000"
              fill-opacity="1"
              d="M0,160L1440,64L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* menus */}
      <section className="w-full  mt-36">
        <div className="flex flex-col justify-center items-center gap-2 py-6">
          <h4 className="text-yellow-400 text-xs uppercase font-semibold">
            Top Foods{" "}
          </h4>
          <h1 className="font-semibold text-4xl">Our categories</h1>
        </div>
        {/* slider */}
        {/* slider component should be here */}
        <div className="w-full px-10 flex justify-between">
          <Button className="cursor-pointer">
            <MoveLeft />
          </Button>{" "}
          <Button className="cursor-pointer">
            <MoveRight />
          </Button>
        </div>
        <div className="w-full p-10 bg-white shadow-xl shadow-gray-200 rounded-2xl flex justify-start items-center gap-5 overflow-x-scroll ">
          <CategoryCart
            name="Burger"
            image="https://www.foodandwine.com/thmb/rsX2jxXsOkvByaQckcfIdLxD2Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg"
          />
          <CategoryCart
            name="Pasta"
            image="https://www.foodandwine.com/thmb/rsX2jxXsOkvByaQckcfIdLxD2Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg"
          />
          <CategoryCart
            name="Pasta"
            image="https://www.foodandwine.com/thmb/rsX2jxXsOkvByaQckcfIdLxD2Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg"
          />
          <CategoryCart
            name="Pasta"
            image="https://www.foodandwine.com/thmb/rsX2jxXsOkvByaQckcfIdLxD2Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg"
          />
          <CategoryCart
            name="Pasta"
            image="https://www.foodandwine.com/thmb/rsX2jxXsOkvByaQckcfIdLxD2Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg"
          />
        </div>
      </section>
      {/* list of shops  */}
      <section className="w-full mt-36">
        <div className="flex flex-col justify-center items-center gap-2 py-6 text-center">
          <h4 className="text-yellow-400 text-xs uppercase font-semibold">
            Top Restaurants
          </h4>
          <h1 className="font-semibold text-3xl md:text-4xl">
            Most Featured Restaurants
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between items-center px-6 md:px-10 mb-4">
          <Button size="icon" className="rounded-full">
            <MoveLeft />
          </Button>
          <Button size="icon" className="rounded-full">
            <MoveRight />
          </Button>
        </div>

        {/* Scrollable Slider */}
        <div className="w-full bg-white shadow-xl shadow-gray-200 rounded-2xl px-6 py-8 overflow-x-auto">
          <div className="flex gap-6 md:gap-8 flex-nowrap min-w-max">
            <ShopCard
              name="The Curry House"
              image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              type="Indian Restaurant"
              rating={4.7}
            />
            <ShopCard
              name="Sushi World"
              image="https://images.unsplash.com/photo-1601924582971-bef6761e21a5"
              type="Japanese Cuisine"
              rating={4.8}
            />
            <ShopCard
              name="Burger Bliss"
              image="https://images.unsplash.com/photo-1550547660-d9450f859349"
              type="Fast Food"
              rating={4.6}
            />
            <ShopCard
              name="Pasta Point"
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              type="Italian Cuisine"
              rating={4.9}
            />
            <ShopCard
              name="Taco Town"
              image="https://images.unsplash.com/photo-1601924752432-3cc86e3e4b3c"
              type="Mexican"
              rating={4.7}
            />
          </div>
        </div>

        {/* product list like 3 of the products */}
      </section>
    </section>
  )
}

export default UserDashboard