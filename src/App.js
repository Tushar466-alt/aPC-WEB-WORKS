import React from "react";
import PCNavbar from "./components/navbar/PCNavbar";
import { IoIosArrowUp } from "react-icons/io";
// import ChatBox from "./components/common/ChatBox";

function App() {
  return (
    <>
      <PCNavbar />
      {/* <ChatBox /> */}
      <CommonUpArrow />
    </>
  );
}

const CommonUpArrow = () => {
  return (
    <div className="w-12 h-12 bg-[black] rounded-full text-[yellow] fixed hover:bg-[yellow] hover:drop-shadow-lg hover:border-black hover:text-[black] z-10 bottom-6 right-6 flex items-center justify-center cursor-pointer">
      <IoIosArrowUp className="text-2xl" />
    </div>
  );
};

export default App;
