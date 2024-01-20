"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import iconDown from "@public/icon/downarrow.png";
function QuestionsAndAns(props) {
  const [status, setStatus] = useState(false);
  return (
    <div className="flex flex-col bg-gray-100 p-5 h-auto">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-darkblue font-bold text-md">
          Do you do web design or Web development
        </h1>{" "}
        <span
          className={` ${
            status ? "rotate-180" : "rotate-0"
          } transition-all duration-300 cursor-pointer `}
          onClick={() => setStatus((prev) => !prev)}
        >
          <Image src={iconDown}></Image>
        </span>
      </div>
      <div
        className={`${
          status ? "max-h-[500px]" : "max-h-0"
        } transition-all  duration-300 overflow-hidden`}
      >
        <p className="py-4 text-shadecolor text-sm">{props.details}</p>
      </div>
    </div>
  );
}

export default QuestionsAndAns;
