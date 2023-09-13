import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="w-12 h-12 bg-[#969696] rounded-full text-white fixed hover:bg-gray-700 hover:drop-shadow-lg hover:border-black hover:text-white z-10 bottom-6 right-6 flex items-center justify-center cursor-pointer"
          onClick={scrollToTop}
        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
