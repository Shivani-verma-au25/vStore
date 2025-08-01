import React from "react";
import { Button } from "./ui/button";
import HeroCards from "./HeroCards";
import CategoryCard from "./CategoryCArd";
import { Check, Clock, Instagram, Lock } from "lucide-react";
import { Input } from "./ui/input";

function Hero() {
  const no = [1, 2, 3];
  return (
    <div className=" max-w-screen ">
      {/*hero image  */}
      <div className=" w-full h-[80vh] sm:h-full relative ">
        <div className="w-full h-full bg-black opacity-55 absolute to-5% z-1"></div>
        <img className="w-full h-full object-cover " src="/hero.jpg" alt="" />
        <div className="absolute top-36 z-1 flex flex-col items-center w-full">
          {/* <h1 className="text-white font-bold tracking-tighter text-4xl p-4 text-center sm:text-5xl sm:w-3xl md:text-6xl lg:text-6xl md:p-9 md:w-3xl "> */}
          <h1 className="text-white font-bold tracking-tighter text-4xl p-4 text-center text-[min(10vw,80px)] md:p-9">
            Timeless Fashion for the morden wordrobe
          </h1>
          <p className="text-white px-8 text-center text-sm md:w-3xl md:px-12 md:text-lg ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            sapiente dolorum fugiat repudiandae modi ad, nam ill{" "}
          </p>
          <Button className="rounded-full p-6 mt-5 md:p-6 md:mt-10">
            EXPLORE THE COLLECTION
          </Button>
        </div>
      </div>
      {/* new arrivals */}
      <div className="max-w-6xl mx-auto flex flex-col justify-center md:justify-between md:flex-row md:items-center">
        <div className="py-10">
          <h1 className="text-center mt-5 font-bold text-4xl md:text-start px-10">
            New Arrivals{" "}
          </h1>
          <p className="text-center py-1 px-8 md:text-start md:px-10 text-gray-600 font-normal">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            voluptatem?{" "}
          </p>
        </div>
        <div className="text-center py-3 md:px-10">
          <Button className=" rounded-full p-6">SEE WAHT'S NEW</Button>
        </div>
      </div>

      {/* cards */}
      {/* <div className="bg-red-700 py-10"> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:px-4 py-10 mb-10">
        {no.map((item, index) => (
          <HeroCards key={index} item={item}/>
        ))}
      </div>
      {/* </div> */}

      {/* categories */}
      <div className="bg-red-100 w-full py-10">
        {/* Heading Section */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            {" "}
            What you can shop
          </h1>
          <p className="text-gray-600 mt-2 text-center font-medium py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            voluptatem?
          </p>
        </div>

        {/* Category Cards */}
        <div className="max-w-6xl mx-auto px-4 pb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <CategoryCard text="Kids Wear" />
          <CategoryCard text="Womens Wear" />
          <CategoryCard text="Mens Wear" />
          <CategoryCard text="Accessories" />
        </div>
      </div>
      {/* how it work static page */}
      <div className="w-full bg-red-50 ">
        <div className="max-w-6xl  mx-auto p-5" >
        <h1 className="text-[min(10vw,40px)] font-bold text-center pt-10" >How it works</h1>
        <p className="text-center tracking-wide font-normal capitalize py-3 text- " >just pick,pack and ship</p>
        <div className="flex-col p-4 sm:flex sm:flex-row sm:justify-evenly border  border-gray-500 w-full rounded-lg shadow-2xl sm:p-7 my-10">
          <div className="flex gap-4 items-center justify-center border-b-2  md:border-b-0 sm:border-r-2 ">
            <div className=" flex justify-center items-center border-2 w-10 h-10 rounded-full p-2 border-red-500 bg-white">
              <Lock className="text-red-500" />
            </div>
            <div className="flex flex-col items-start justify-center mt-10">
              <h2 className="font-bold" >Shop Styles</h2>
              <p className="font-normal py-3" >Browse our curated collections for Men, Women, Kids & Accessories.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center border-b-2 sm:border-r-2 md:border-b-0 sm:mb-5 ml-5 ">
            <div className=" flex justify-center items-center border-2 w-10 h-10 rounded-full p-2 border-red-500 bg-white">
              <Clock className="text-red-500" />
            </div>
            <div className="flex flex-col items-start justify-center mt-10">
              <h2 className="font-bold" >Shop Styles</h2>
              <p className="font-normal py-3" >Find your perfect size with our detailed fit guides and style notes for every piece.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center  ml-5">
            <div className=" flex justify-center items-center border-2 w-10 h-10 rounded-full p-2 border-red-500 bg-white">
              <Check className="text-red-500" />
            </div>
            <div className="flex flex-col items-start justify-center mt-10 ">
              <h2 className="font-bold" >Shop Styles</h2>
              <p className="font-normal py-3" >Enjoy a quick and secure checkout experience with flexible payment options.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/*  */}

      <div className="w-full py-10">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-[min(10vw,40px)] font-bold text-center pt-4 px-4 text-xs sm:text-3xl md:4xl">Get 10% off on your  first order</h1>
          <p className="text-center text-sm sm:text-lg md:text-xl lg:text-sm px-3 py-3">Plus exclusive access to product drops, style tips, and insider deals.</p>
          <div className="p-5 flex-col gap-3 sm:flex sm:flex-row sm:gap-2 sm:justify-center sm:items-center">
            <Input
            text='text'
            placeholder='ENTER YOUR EMAIL'
            className='border-2 '
            />
            <Button className='bg-red-700 w-full sm:w-1/5 mt-4 sm:mt-0'>SUBSCRIBE</Button>
          </div>
          <p className="flex justify-center gap-2 font-bold py-4"><Instagram/>Follow us <span className="font-normal">@vStore</span></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
