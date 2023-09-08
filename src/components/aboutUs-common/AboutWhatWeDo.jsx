import React from "react";

const AboutWhatWeDo = () => {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
        {/* <div className="grid grid-cols-1"> */}
        <div className="flex justify-center items-center mr-1 border">
          <img
            src="https://www.wisertechsolutions.ca/wp-content/uploads/2019/05/ecom.png"
            className="w-full"
            title="Image"
            alt="Image"
          />
        </div>
        <div className="flex justify-center items-center mx-1 border">
          <img
            src="https://localpropeller.ca/wp-content/uploads/2016/04/eCommerce-Icon-01.png"
            className="w-full"
            title="Image"
            alt="Image"
          />
        </div>
        {/* </div> */}
        <div className="bg-[yellow] p-11 lg:p-8 ml-1">
          <span className="text-3xl font-bold text-black opacity-80">
            What We Do
          </span>
          <p className="mt-5 text-sm font-sans text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br /> 
            <br /> 
            &nbsp; &nbsp;&nbsp;&nbsp; Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="border border-black px-6 py-3 mt-8 font-bold hover:bg-black hover:text-white hover:duration-500 lg:mt-4 lg:py-2 lg:px-4 ">
            OUR WORKS
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutWhatWeDo;
