import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PCHome from "../../pages/PCHome";
import PCAboutUs from "../../pages/PCAboutUs";
import PCContactUs from "../../pages/PCContactUs";
import PCBlog from "../../pages/PCBlog";
import PCPortfolio from "../../pages/PCServices";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const PCNavbar = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PCHome />} />
        <Route path="/blog" element={<PCBlog />} />
        <Route path="/services" element={<PCPortfolio />} />
        <Route path="/aboutUs" element={<PCAboutUs />} />
        <Route path="/contactUs" element={<PCContactUs />} />
      </Routes>
    </Router>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let menuItem = [
    { id: 2, name: "Blog", value: "blog" },
    { id: 3, name: "Services", value: "services" },
    { id: 4, name: "About Us", value: "aboutUs" },
    { id: 4, name: "Contact Us", value: "contactUs" },
  ];
  return (
    <>
      <div className="bg-lightGreen w-full flex justify-between p-4 md:px-8 md:py-4 items-center lg:py-3 xl:py-4 shadow-md lg:px-16 xl:px-16 border-b-2">
        <div className="text-md block lg:hidden xl:hidden">
          {toggle ? (
            <LuX
              className="cursor-pointer opacity-70 text-xl md:text-3xl"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <LuAlignJustify
              className="cursor-pointer opacity-70 text-xl md:text-3xl"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>

        <div className="md:text-2xl lg:text-2xl xl:text-2xl">
          <span className="font-extrabold">
            <sup className="drop-shadow-md">a</sup>
            <span className="text-[yellow] drop-shadow-md">PC WEB WORKS</span>
          </span>
        </div>

        <nav
          className={`absolute sm:top-11 sm:left-0 md:left-0
                      sm:w-full md:w-full sm:text-[14px] md:text-[16px] sm:font-semibold md:font-semibold 
                    sm:bg-white md:bg-white sm:py-0 md:py-1 md:top-16 lg:static xl:static lg:flex xl:flex lg:text-sm xl:text-sm ${
                      toggle ? "block" : "hidden"
                    }`}
        >
          <ul className="lg:flex lg:justify-between xl:flex xl:justify-between text-[#1c1c1ce8] font-[600]">
            <li className="py-[6px] px-2 md:px-[20px] md:py-[10px] sm:my-[4px] md:my-[4px] sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6">
              <Link to="/">Home</Link>
              <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" />
            </li>

            {menuItem?.map((item, ind) => {
              return (
                <li
                  key={ind}
                  className="py-[6px] px-2 md:px-[20px] md:py-[10px] sm:my-[4px] md:my-[4px] sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6"
                >
                  <Link to={`/${item.value}`}>{item.name}</Link>
                  <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default PCNavbar;
