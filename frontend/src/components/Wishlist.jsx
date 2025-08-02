import React from "react";
import HeroCards from "./HeroCards";

function Wishlist() {
  const no = [1, 2, 3, 4, 5];

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Your Wishlist ❤️
        </h1>

        {no.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {no.map((pro, indx) => (
              <HeroCards key={indx} item={pro} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
