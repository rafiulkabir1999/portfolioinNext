import React from "react";
import portfolio from "@public/photos/portfolio.jpg";
import Image from "next/image";
function Portfolio() {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col gap-20">
        <h1 className="text-5xl text-darkblue text-center font-bold">
          {" "}
          Portfolio
        </h1>
        <div className="w-[80%] gap-10 mx-auto bg-[#DEFCFF]  rounded-[30px] realative flex">
          <div className="flex flex-1 p-16 flex-col gap-6">
            <h2 className="text-4xl font-semibold text-darkblue">
              Re-Design For WEb <br /> designer Portfolio
            </h2>
            <div className="flex gap-2">
              <button className="bg-white text-darkblue rouned-[30px] text-sm text-shadecolor rounded py-2 px-3">
                User Registration
              </button>
              <button className="bg-white text-darkblue rouned-[30px] text-sm text-shadecolor rounded py-2 px-3">
                UX Design
              </button>
            </div>
            <p className="text-darkblue">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="bg-purple  py-4 rounded-xl text-white font-bold text-sm w-52">
              Read Case Study
            </button>
          </div>
          <div className="flex-1 relative overflow-hidden ">
            <div className="hoverflow-hidden pt-16 pr-16 absolute">
              <Image src={portfolio} />
            </div>
          </div>
        </div>
        <div className="w-[80%] gap-10 mx-auto bg-[#EDF0F9]  rounded-[30px] realative flex">
          <div className="flex flex-1 p-16 flex-col gap-6">
            <h2 className="text-4xl font-semibold text-darkblue">
              Re-Design For WEb <br /> designer Portfolio
            </h2>
            <div className="flex gap-2">
              <button className="bg-white text-darkblue rouned-[30px] text-sm text-shadecolor rounded py-2 px-3">
                User Registration
              </button>
              <button className="bg-white text-darkblue rouned-[30px] text-sm text-shadecolor rounded py-2 px-3">
                UX Design
              </button>
            </div>
            <p className="text-darkblue">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="bg-purple  py-4 rounded-xl text-white font-bold text-sm w-52">
              Read Case Study
            </button>
          </div>
          <div className="flex-1 relative overflow-hidden ">
            <div className="hoverflow-hidden pt-16 pr-16 absolute">
              <Image src={portfolio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
