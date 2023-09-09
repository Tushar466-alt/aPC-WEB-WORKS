
import Card from "../components/comman/Card";

import {
  LuLightbulb,
  LuSettings,
  LuLaptop2,
  LuPencil,
  LuStar,
  LuMessagesSquare,
} from "react-icons/lu";
import Footer from "../components/footer/Footer";
import StaticPakage from "../components/services-common/StaticPakage";

const PCServices = () => {
  let data = [
    {
      id: 1,
      icon: <LuLightbulb />,
      heading: "Static Website",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 2,
      icon: <LuSettings />,
      heading: "Dynamic Website",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 3,
      icon: <LuLaptop2 />,
      heading: "E-Commerce Website",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 4,
      icon: <LuPencil />,
      heading: "Android App Development",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 5,
      icon: <LuStar />,
      heading: "Logo & Graphic Design",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 6,
      icon: <LuMessagesSquare />,
      heading: "Bulk Website Design",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 py-10 gap-2 lg:gap-x-0 xl:gap-x-6 justify-items-center items-center md:grid-cols-2 gap-y-5 lg:grid-cols-3 lg:gap-2 lg:px-6 xl:grid-cols-3 xl:px-12 sm:px-4 md:px-4 bg-white">
        {data?.map((item, ind) => {
          return (
            <div key={ind}>
              <Card className="bg-[white] rounded-lg hover:bg-[yellow] cursor-pointer border">
                <div className="grid grid-cols-4">
                  <div className="h-14 w-14 sm:h-14 sm:w-14 md:h-12 md:w-12 rounded-full items-center bg-white mt-2 flex flex-col justify-center border-[2px] hover:shadow-lg">
                    <span className="items-center mx-auto text-[32px] text-[#222322f5]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="col-span-3 px-2 sm:px-1 md:px-1">
                    <span className="font-bold text-[#1c1c1cce] text-[18px] hover:text-black">
                      {item.heading}
                    </span>
                    <p className="py-2 leading-5 tracking-normal font-sans md:leading-6 text-[13px] xl:text-justify text-[#1c1c1cce] font-semibold text-xs hover:text-[black]">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-2 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-[black]">
        <div className="text-center">
          <span className="font-bold text-4xl text-[yellow] sm:text-3xl">
            What Our Clients Say
          </span>
          <div className="flex justify-center mt-6">
            <hr className="border-b-1 border-[#939393] w-[100px]" />
            <div className="w-[14px] h-[14px] bg-transparent border border-[yellow] rounded-sm relative top-[-7px] mx-3"></div>
            <hr className="border-b-1 border-[#939393] w-[100px]" />
          </div>
          <p className="px-2 mx-auto mt-2 text-[yellow] py-4 text-[14px] font-semibold tracking-tight lg:w-[50%] xl:w-[50%]">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
        </div>
      </div>
      <StaticPakage />
      <Footer />
    </>
  );
};

export default PCServices;
