import React from "react";
import Components from "../comman/Components"

function WeDo() {
  return (
    <>
      <Components className="flex bg-[#fafafa] text-[#707070] text-left sm:px-0  sm:flex-col sm:py-12 md:px-0  md:flex-col md:py-12">
        <div className="flex flex-col justify-center space-y-4 pr-10 w-4/5  sm:px-3 text-justify sm:w-full md:px-8 ] md:w-full animate-bounceInLeft">
          <span className="text-2xl font-bold">What We Do ?</span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
          <div>
            <button className="border border-solid border-gray-500 text-xl py-2 px-10 hover:bg-gray-400 hover:text-white sm:text-base md:text-base font-semibold ">
              Read more
            </button>
          </div>
        </div>
        <div>
          <div className="sm:pt-4 md:pt-4 flex justify-center sm:mt-10 md:mt-10 animate-bounceInRight">
            <img
              src="https://okab.pixeldima.com/wp-content/uploads/2016/05/ipad-air.png"
              className=""
            />
          </div>
        </div>
      </Components>
    </>
  );
}

export default WeDo;
