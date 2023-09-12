import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { RiAccountPinCircleLine } from "react-icons/ri";

const PCNavbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSideBar = () => {
    setIsToggle(!isToggle);

    if (!isToggle) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeSidebar = () => {
    setIsToggle(false);
    if (isToggle) {
      document.body.style.overflow = "auto";
    }
  };

  let menuItem = [
    { id: 2, name: "Blog", value: "blog" },
    { id: 3, name: "Services", value: "services" },
    { id: 4, name: "About Us", value: "aboutUs" },
    { id: 4, name: "Contact Us", value: "contactUs" },
  ];
  return (
    <>
      <div className="fixed top-0 bg-white text-[#8f8f8f] flex justify-between p-3 md:px-8 md:py-4 items-center lg:py-3 xl:py-4 lg:px-16 xl:px-16 border-b-2 w-screen">
        <div className="flex justify-between w-[80%]">
          <div className="text-md block lg:hidden xl:hidden">
            {isToggle ? (
              <LuX
                className="cursor-pointer text-4xl"
                onClick={toggleSideBar}
              />
            ) : (
              <LuAlignJustify
                className="cursor-pointer text-4xl"
                onClick={toggleSideBar}
              />
            )}
          </div>

          <div className="text-2xl sm:text-lg lg:font-extrabold xl:font-extrabold sm:mr-10 sm:mt-1">
            <span className="font-bold">
              <sup>a</sup>
              <span>PC WEB WORKS</span>
            </span>
          </div>

          <nav
            className={`absolute sm:top-[66px] md:top-[70px]  sm:left-0 md:left-0 sm:h-screen md:h-screen
                      sm:w-screen md:w-screen sm:text-[14px] md:text-[16px] sm:font-semibold md:font-semibold
                     sm:py-0 md:py-1 lg:static xl:static lg:flex xl:flex lg:text-sm xl:text-sm bg-white ${
                       isToggle ? "block" : "hidden"
                     }`}
          >
            <ul className="lg:flex lg:justify-between xl:flex xl:justify-between font-[600]">
              <li
                className="py-[6px] px-4 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-0 xl:mx-4"
                onClick={closeSidebar}
              >
                <Link to="/">Home</Link>
                {/* <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" /> */}
              </li>

              {menuItem?.map((item, ind) => {
                return (
                  <li
                    key={ind}
                    className="py-[6px] px-4 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-0 xl:mx-4"
                    onClick={closeSidebar}
                  >
                    <Link to={`/${item.value}`}>{item.name}</Link>
                    {/* <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" /> */}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex justify-evenly w-[20%]">
          <div class="w-[0.2px] h-12 bg-gray-500 sm:hidden"></div>
          <div className="flex flex-col items-center">
            <Link to="/auth-ls">
              <RiAccountPinCircleLine className="text-2xl sm:text-2xl sm:mt-[-3px] cursor-pointer" />
            </Link>
            {/* <span className="text-xs mt-1">
              <span className="font-bold"> Hello,</span>User Name
            </span> */}
            <span className="text-xs mt-1">Login</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCNavbar;
