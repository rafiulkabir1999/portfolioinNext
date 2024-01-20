import React from "react";

function Tryme() {
  return (
    <div className="container mx-auto my-20">
      <div className="w-[80%] mx-auto relative flex ">
        <div className="absolute bg-[#7DE0EA] h-full w-full -rotate-2 rounded-[30px] block"></div>
        <div className="flex grow bg-[#583FBC] rounded-[30px] z-10">
          <div className="flex flex-1 flex-col py-20 px-28 gap-5">
            <h1 className="text-5xl font-bold text-white">
              Try me out , risk free
            </h1>
            <p className="text-white text-lg text-normal">
              If you’re not happy with the design after the first draft, I’ll
              refund your deposit, no{" "}
              <span className="font-bold">questions asked</span>
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <button className="p-3 px-7 text-md rounded-xl bg-[#7DE0EA]">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tryme;
