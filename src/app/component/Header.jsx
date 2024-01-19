"use client";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [active, setactive] = useState(null);
  return (
    <div className="bg-white p-2">
      <div className="container mx-auto flex justify-between items-center text-darkblue">
        <h1 className="text-darkblue text-xl cursor-pointer">
          <Link href="/">Laura Portfolio</Link>
        </h1>

        <div className="flex space-x-10 items-center">
          <ul className="flex space-x-10 text-sm text-primary">
            <li
              onClick={() => setactive("Home")}
              className={` ${
                active === "Home"
                  ? "text-darkblue font-bold cursor-pointer"
                  : ""
              }`}
            >
              Home
            </li>
            <li
              onClick={() => setactive("Aboutme")}
              className={` ${
                active === "Aboutme"
                  ? "text-darkblue font-bold cursor-pointer"
                  : ""
              }`}
            >
              About Me
            </li>
            <li
              onClick={() => setactive("Portfolio")}
              className={` ${
                active === "Portfolio"
                  ? "text-darkblue font-bold cursor-pointer"
                  : ""
              }`}
            >
              Portfolio
            </li>
            <li
              onClick={() => setactive("FAQ")}
              className={` ${
                active === "FAQ" ? "text-darkblue font-bold cursor-pointer" : ""
              }`}
            >
              FAQ
            </li>
          </ul>
          <button className="bg-highlitecolor px-4 py-2 rounded-md text-white text-sm">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
