// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import PCHome from "../../pages/PCHome";
// import PCAboutUs from "../../pages/PCAboutUs";
// import PCContactUs from "../../pages/PCContactUs";
// import PCBlog from "../../pages/PCBlog";
// import PCPortfolio from "../../pages/PCServices";
// import { LuAlignJustify, LuX } from "react-icons/lu";
// // import { MdKeyboardArrowDown } from "react-icons/md";

// const PCNavbar = () => {
//   return (
//     <div>
//       <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<PCHome />} />
//         <Route path="/blog" element={<PCBlog />} />
//         <Route path="/services" element={<PCPortfolio />} />
//         <Route path="/aboutUs" element={<PCAboutUs />} />
//         <Route path="/contactUs" element={<PCContactUs />} />
//       </Routes>
//     </Router>
//     </div>
//   );
// };

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   let menuItem = [
//     { id: 2, name: "Blog", value: "blog" },
//     { id: 3, name: "Services", value: "services" },
//     { id: 4, name: "About Us", value: "aboutUs" },
//     { id: 4, name: "Contact Us", value: "contactUs" },
//   ];
//   return (
//     <>
//       <div className="bg-[#1c1c1ce8] w-full flex justify-between p-4 md:px-8 md:py-4 items-center lg:py-3 xl:py-4 shadow-md lg:px-16 xl:px-16 border-b-2">
//         <div className="text-md block lg:hidden xl:hidden">
//           {toggle ? (
//             <LuX
//               className="cursor-pointer text-4xl text-white"
//               onClick={() => setToggle(!toggle)}
//             />
//           ) : (
//             <LuAlignJustify
//               className="cursor-pointer text-4xl text-white"
//               onClick={() => setToggle(!toggle)}
//             />
//           )}
//         </div>

//         <div className="text-2xl">
//           <span className="font-extrabold">
//             <sup className="drop-shadow-md text-white">a</sup>
//             <span className="text-[yellow]">PC WEB WORKS</span>
//           </span>
//         </div>

//         <nav
//           className={`absolute sm:top-[67px] sm:left-0 md:left-0 sm:h-[400px] md:h-[400px]
//                       sm:w-screen md:w-screen sm:text-[14px] md:text-[16px] sm:font-semibold md:font-semibold
//                     sm:bg-black md:bg-black sm:py-0 md:py-1 md:top-16 lg:static xl:static lg:flex xl:flex lg:text-sm xl:text-sm ${
//                       toggle ? "block" : "hidden"
//                     }`}
//         >
//           <ul className="lg:flex lg:justify-between xl:flex xl:justify-between text-[yellow] sm:text-white md:text-white font-[600]">
//             <li className="py-[6px] px-6 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6">
//               <Link to="/">Home</Link>
//               {/* <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" /> */}
//             </li>

//             {menuItem?.map((item, ind) => {
//               return (
//                 <li
//                   key={ind}
//                   className="py-[6px] px-6 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6"
//                 >
//                   <Link to={`/${item.value}`}>{item.name}</Link>
//                   {/* <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" /> */}
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };
// export default PCNavbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuAlignJustify, LuX } from "react-icons/lu";

const PCNavbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSideBar = () => {
    setIsToggle(!isToggle);

    if(!isToggle) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeSidebar = () => {
    setIsToggle(false)
    if(isToggle){
      document.body.style.overflow = 'auto'
    }
  }

  let menuItem = [
    { id: 2, name: "Blog", value: "blog" },
    { id: 3, name: "Services", value: "services" },
    { id: 4, name: "About Us", value: "aboutUs" },
    { id: 4, name: "Contact Us", value: "contactUs" },
  ];
  return (
    <>
      <div className="sticky top-0 bg-white text-[#8f8f8f] w-full flex justify-between p-4 md:px-8 md:py-4 items-center lg:py-3 xl:py-4 shadow-md lg:px-16 xl:px-16 border-b-2">
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

        <div className="text-2xl">
          <span className="font-extrabold">
            <sup>a</sup>
            <span>PC WEB WORKS</span>
          </span>
        </div>

        <nav
          className={`absolute sm:top-[70px] md:top-[70px]  sm:left-0 md:left-0 sm:h-screen md:h-screen
                      sm:w-screen md:w-screen sm:text-[14px] md:text-[16px] sm:font-semibold md:font-semibold
                     sm:py-0 md:py-1 lg:static xl:static lg:flex xl:flex lg:text-sm xl:text-sm bg-white ${
                       isToggle ? "block" : "hidden"
                     }`}
        >
          <ul className="lg:flex lg:justify-between xl:flex xl:justify-between font-[600]">
            <li className="py-[6px] px-6 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6" onClick={closeSidebar}>
              <Link to="/">Home</Link>
              {/* <MdKeyboardArrowDown className="sm:text-[14px] md:text-[14px] lg:hidden xl:hidden" /> */}
            </li>

            {menuItem?.map((item, ind) => {
              return (
                <li
                  key={ind}
                  className="py-[6px] px-6 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6"
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
    </>
  );
};

export default PCNavbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { LuAlignJustify, LuX } from "react-icons/lu";

// const PCNavbar = () => {
//   const [isToggle, setIsToggle] = useState(false);

//   const toggleSideBar = () => {
//     setIsToggle(!isToggle);

//     if (!isToggle) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   };

//   let menuItem = [
//     { id: 2, name: "Blog", value: "blog" },
//     { id: 3, name: "Services", value: "services" },
//     { id: 4, name: "About Us", value: "aboutUs" },
//     { id: 4, name: "Contact Us", value: "contactUs" },
//   ];
//   return (
//     <>
//       <div className="bg-white text-[#8f8f8f] w-full flex justify-between p-4 md:px-8 md:py-4 items-center lg:py-3 xl:py-4 shadow-md lg:px-16 xl:px-16 border-b-2">
//         <div className="text-md block lg:hidden xl:hidden">
//           {isToggle ? (
//             <LuX
//               className="cursor-pointer text-4xl"
//               onClick={toggleSideBar}
//             />
//           ) : (
//             <LuAlignJustify
//               className="cursor-pointer text-4xl"
//               onClick={toggleSideBar}
//             />
//           )}
//         </div>

//         <div className="text-2xl">
//           <span className="font-extrabold">
//             <sup>a</sup>
//             <span>PC WEB WORKS</span>
//           </span>
//         </div>

//         <nav
//           className={`absolute sm:top-[70px] md:top-[70px] sm:left-0 md:left-0 sm:h-screen md:h-screen sm:w-screen md:w-screen sm:text-[14px] md:text-[16px] sm:font-semibold md:font-semibold sm:py-0 md:py-1 lg:static xl:static lg:flex xl:flex lg:text-sm xl:text-sm bg-white ${
//             isToggle ? "block" : "hidden"
//           }`}
//         >
//           <ul className="lg:flex lg:justify-between xl:flex xl:justify-between font-[600]">
//             <li
//               className="py-[6px] px-6 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6"
//               onClick={toggleSideBar}
//             >
//               <Link to="/">Home</Link>
//             </li>

//             {menuItem?.map((item, ind) => {
//               return (
//                 <li
//                   key={ind}
//                   className="py-[6px] px-6 sm:my-4 md:px-[20px] md:py-[10px] md:my-[4px] sm:text-xl md:text-xl sm:flex sm:justify-between md:flex md:justify-between lg:mx-6 xl:mx-6"
//                   onClick={toggleSideBar}
//                 >
//                   <Link to={`/${item.value}`}>{item.name}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//       <div
//         className={`fixed top-0 left-0 w-full h-screen transition-transform duration-300 ease-in-out transform ${
//           isToggle ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div
//           className={`fixed top-0 left-0 w-full h-screen bg-black opacity-60 ${
//             isToggle ? "block" : "hidden"
//           }`}
//           onClick={toggleSideBar}
//         ></div>
//         <div
//           className={`bg-white w-64 h-screen overflow-y-auto transform translate-x-0 transition-transform duration-300 ease-in-out ${
//             isToggle ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="p-4">
//             <LuX
//               className="cursor-pointer text-4xl"
//               onClick={toggleSideBar}
//             />
//           </div>
//           <ul className="font-semibold">
//             <li className="p-4">
//               <Link to="/">Home</Link>
//             </li>
//             {menuItem?.map((item, ind) => {
//               return (
//                 <li key={ind} className="p-4">
//                   <Link to={`/${item.value}`}>{item.name}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PCNavbar;
