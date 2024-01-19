import React from "react";
import profile from "@public/photos/customer.jpg";
import Image from "next/image";
function CustomerReview() {
  return (
    <div className="container mx-auto mt-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-darkblue text-center p-20 my-10">
        Customers reviews
      </h1>
      <div className="flex gap-5 w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center relative bg-white rounded-[30px] p-10">
          <div className="absolute -top-16">
            <div className="relative w-32 h-32 overflow-hidden rounded-full">
              <div className="absolute">
                <Image src={profile} />
              </div>
            </div>
          </div>
          <p className="text-base text-center text-darkblue leading-6 mt-16">
            To ensure that the Community continues to be the best place to find
            Figma resources, we ask that you avoid the following
          </p>
          <p className="font-boldt text-md text-darkblue py-6">Anna Writens</p>
          <p className="text-sm text-shadecolor pt-2">Designer</p>
        </div>
        <div className="flex flex-col items-center justify-center relative bg-white rounded-[30px] p-10">
          <div className="absolute -top-16">
            <div className="relative w-32 h-32 overflow-hidden rounded-full">
              <div className="absolute">
                <Image src={profile} />
              </div>
            </div>
          </div>
          <p className="text-base text-center text-darkblue leading-6 mt-16">
            To ensure that the Community continues to be the best place to find
            Figma resources, we ask that you avoid the following
          </p>
          <p className="font-boldt text-md text-darkblue py-6">Anna Writens</p>
          <p className="text-sm text-shadecolor pt-2">Designer</p>
        </div>
        <div className="flex flex-col items-center justify-center relative bg-white rounded-[30px] p-10">
          <div className="absolute -top-16">
            <div className="relative w-32 h-32 overflow-hidden rounded-full">
              <div className="absolute">
                <Image src={profile} />
              </div>
            </div>
          </div>
          <p className="text-base text-center text-darkblue leading-6 mt-16">
            To ensure that the Community continues to be the best place to find
            Figma resources, we ask that you avoid the following
          </p>
          <p className="font-boldt text-md text-darkblue py-6">Anna Writens</p>
          <p className="text-sm text-shadecolor pt-2">Designer</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
