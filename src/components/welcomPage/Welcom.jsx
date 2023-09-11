import React from "react";

function Welcome() {
  return (
    <>
      <div className='bg-[url("https://okab.pixeldima.com/wp-content/uploads/2016/06/Scene-01.jpg")] h-screen grid place-items-center  sm:bg-cover sm:bg-center md:bg-cover md:bg-center'>
        <div className="sm:text-center flex flex-col pt-96 sm:pt-0 md:pt-0 ">
          <span className="text-6xl font-bold flex justify-center sm:flex-col md:text-4xl sm:text-3xl">
            <p className="text-border-1 stroke-black  animate-bounceInLeft">
              WELCOME TO
            </p>
            <p className="text-orange-500 animate-bounceInRight">
              <sup className="">a</sup>PC WEB WORKS
            </p>
          </span>
          <p className="text-lg font-semibold text-gray-700 sm:mx-0 sm:py-0 sm:pl-0 sm:text-sm md:mx-0  md:py-0 md:pl-0 md:text-sm  flex justify-center sm:pr-0 animate-opacityAnimaton">
            data, and receive responses
          </p>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
