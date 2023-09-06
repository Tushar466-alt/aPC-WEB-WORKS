import React, { memo, useEffect, useState } from "react";
import Button from "./common/Button";

const PCLProject = () => {
  const [isActive, setIsActive] = useState("All");
  const [btnGroup, setBtnGroup] = useState([
    {
      id: 1,
      children: "All",
    },
    {
      id: 2,
      children: "Branding",
    },
    {
      id: 3,
      children: "Design",
    },
    {
      id: 4,
      children: "Photography",
    },
  ]);

  function buttonHandler(event) {
    setIsActive(event);
  }

  const imageObj = [
    {
      id: 1,
      name: "",
      url: "https://okab.pixeldima.com/wp-content/uploads/2016/04/project-1.jpg",
      alt: "",
    },
    {
      id: 2,
      name: "",
      url: "https://okab.pixeldima.com/wp-content/uploads/2016/04/project-12.jpg",
      alt: "",
    },
    {
      id: 3,
      name: "",
      url: "https://okab.pixeldima.com/wp-content/uploads/2016/04/project-9.jpg",
      alt: "",
    },
    {
      id: 4,
      name: "",
      url: "https://okab.pixeldima.com/wp-content/uploads/2016/04/project-6.jpg",
      alt: "",
    },
  ];

  return (
    <>
      <div className="grid grid-rows-2 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-white">
        <div className="text-center">
          <span className="font-bold text-4xl text-gray-800 sm:text-3xl">
            Latest Project
          </span>
          <p className="px-2 mx-auto mt-2 text-gray-600 py-4 text-[14px] font-semibold tracking-tight lg:w-[50%] xl:w-[50%]">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
        </div>

        <div className="text-center mx-auto py-4 flex lg:flex-row xl:flex-row gap-3 lg:gap-0 xl:gap-0">
          <div className="flex sm:flex-wrap items-center justify-center">
            {btnGroup?.map((item, ind) => {
              return (
                <Button
                  key={ind}
                  className={`${
                    isActive == item.children ? "bg-[yellow]" : "bg-slate-50"
                  } border hover:bg-[yellow] hover:text-black text-black font-bold py-1 px-1 mx-2 w-[112px]`}
                  onClick={() => buttonHandler(item.children)}
                >
                  {item.children}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-4 ">
          {imageObj?.map((item, ind) => {
            return (
              <div key={ind}>
                <img className="w-full h-full" src={item.url} alt={item.alt} title={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(PCLProject);
