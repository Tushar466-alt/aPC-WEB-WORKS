import React from "react";

const Quickview = () => {
  return (
    <>
      <div className="grid grid-cols-12 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-green-50">
        <div className="col-span-4 sm:col-span-12 md:col-span-12 flex justify-center items-center sm:justify-start md:justify-start md:px-4">
          <span className="text-4xl font-semibold py-4">Quick View</span>
        </div>
        <div className="col-span-8 sm:col-span-12 md:col-span-12 ">
          <p className="text-justify p-4 sm:p-1 text-gray-500 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit.
            <br />
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni.
          </p>
        </div>
      </div>
    </>
  );
};

export default Quickview;
