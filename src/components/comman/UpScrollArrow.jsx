import { IoIosArrowUp } from "react-icons/io";

const UpScrollArrow = () => {
    return (
      <div className="w-12 h-12 bg-[black] rounded-full text-[yellow] fixed hover:bg-[yellow] hover:drop-shadow-lg hover:border-black hover:text-[black] z-10 bottom-6 right-6 flex items-center justify-center cursor-pointer">
        <IoIosArrowUp className="text-2xl" />
      </div>
    );
  };

  export default UpScrollArrow;