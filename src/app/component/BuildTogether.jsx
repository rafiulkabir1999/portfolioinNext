import React from "react";
import profile from "@public/photos/profile.png";
import Image from "next/image";
function BuildTogether() {
  return (
    <div className="container mx-auto my-10">
      <div className="flex w-[80%] mx-auto">
        <div className="flex flex-1 justify-center items-center gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5 ">
              <div className="w-16 h-16 rounded-full bg-darkblue overflow-hidden">
                <Image src={profile} />
              </div>
              <h1 className="text-4xl font-bold text-darkblue">
                Let's build together
              </h1>
            </div>

            <div className="flex gap-5">
              <button className="bg-darkblue rounded-xl px-6 py-4 text-xs">
                My Linkdin
              </button>
              <button className="bg-darkblue rounded-xl px-6 py-4 text-xs">
                Download my resume
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 mx-auto relative flex ">
          <div className="absolute bg-[#7DE0EA] h-full w-full -rotate-2 rounded-[30px] block"></div>
          <div className="flex grow bg-[#583FBC] rounded-[30px] z-10 p-10 gap-12">
            <div className="flex flex-col  gap-5">
              <h1 className="text-3xl font-bold text-white">
                Try me out , risk free
              </h1>
              <p className="text-white text-base text-normal">
                If you’re not happy with the design after the first draft, I’ll
                refund your deposit, no{" "}
                <span className="font-bold">questions asked</span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 px-7 text-md rounded-xl bg-[#7DE0EA]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildTogether;
