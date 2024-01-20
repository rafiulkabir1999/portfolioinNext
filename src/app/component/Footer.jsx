import React from "react";

function Footer() {
  return (
    <div className="container mx-auto bg-white ">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between text-sm py-6 text-shadecolor">
          <p className="text-shadecolor">Made by me </p>

          <div className="flex space-x-10">
            <p>Got a question?</p>
            <p className="text-darkblue">youremail@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
