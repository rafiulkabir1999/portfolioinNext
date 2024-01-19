import React from "react";

function Specialization() {
  return (
    <div className="container mx-auto pt-20 px-32">
      <div className="flex ">
        <div className="flex-1"></div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold py-5 text-darkblue py-8">
            I specialize in
          </h1>

          <div className="flex flex-col gap-5">
            <div className="p-4 border-2  border-darkblue rounded-md flex flex-col text-darkblue bg-[#EDF0F9] -rotate-2 my-5">
              <p className="font-bold">1</p>
              <h3 className="font-bold text-xl pb-4 pt-2">Webflow</h3>
              <p>
                I also use Client First system for class naming structure, which
                allows me to build any project fast and conveniently.
              </p>
            </div>
            <div className="p-4 border-2  border-darkblue rounded-md flex flex-col text-darkblue bg-[#EDF0F9] rotate-2  my-5">
              <p className="font-bold">2</p>
              <h3 className="font-bold text-xl pb-4 pt-2">Webflow</h3>
              <p>
                I also use Client First system for class naming structure, which
                allows me to build any project fast and conveniently.
              </p>
            </div>
            <div className="p-4 border-2  border-darkblue rounded-md flex flex-col text-darkblue bg-[#EDF0F9] -rotate-2 my-5">
              <p className="font-bold">1</p>
              <h3 className="font-bold text-xl pb-4 pt-2">Webflow</h3>
              <p>
                I also use Client First system for class naming structure, which
                allows me to build any project fast and conveniently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
