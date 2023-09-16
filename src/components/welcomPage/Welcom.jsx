import React from "react";
import Button from "../../Utilities/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const Navigate = useNavigate();
  function viewPlan() {
    Navigate("/services");
  }
  return (
    <>
      <div className='bg-[url("https://okab.pixeldima.com/wp-content/uploads/2016/06/Scene-01.jpg")] bg-center h-screen flex flex-col justify-center text-black'>
        <div className="sm:text-center flex flex-col items-center">
          <span className="text-6xl font-bold flex flex-col items-center md:text-4xl sm:text-3xl">
            <p className="text-xl animate-bounceInLeft text-[#333333]">
              WELCOME TO
            </p>
            <p className="text-orange-500 animate-bounceInRight">
              <sup className="">a</sup>PC WEB WORKS
            </p>
          </span>
          <span className="text-xs font-normal text-gray-700 animate-opacityAnimaton">
            INSPIRE CONNECT INNOVATE
          </span>

          <div className="flex mt-10">
            <Button className="border border-[#707070] px-5 py-3 font-bold text-[#707070] mx-2 hover:bg:[#ff5733]">
              View Demo
            </Button>
            <Button className="border border-[#707070] px-5 py-3 font-bold text-[#707070] mx-2 hover:bg:[#ff5733]" onClick={viewPlan}>
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
