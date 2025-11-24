import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     if (theme === "light") {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       setTheme("light");
//     }
//   };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white font-fira">
      <div className="flex flex-col items-center gap-7 text-center">

        {/* EYES */}
        <div className="flex justify-center gap-2">
          <div className="w-20 h-20 bg-yellow-400 rounded-full grid place-items-center">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full animate-pupil" />
          </div>

          <div className="w-20 h-20 bg-yellow-400 rounded-full grid place-items-center">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full animate-pupil-reverse" />
          </div>
        </div>

        {/* HEADING */}
        <div>
          <h1 className="text-4xl sm:text-3xl font-semibold text-yellow-400 capitalize">
            Looks like you're lost
          </h1>
          <p className="text-2xl sm:text-xl mt-2 font-light">404 error</p>
        </div>

        {/* BUTTON */}
        <Link
          to="/"
          className="capitalize border border-yellow-400 text-lg px-8 py-3 rounded-xl shadow-[0px_7px_0px_-2px_#faca2e] transition-all hover:bg-yellow-400 hover:text-white hover:shadow-none"
        >
          Back to home
        </Link>
      </div>

      {/* THEME SWITCHER */}
      {/* <button
        onClick={toggleTheme}
        className="fixed top-10 right-10 text-3xl cursor-pointer text-yellow-400 bg-transparent"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button> */}
    </main>
  );
}
