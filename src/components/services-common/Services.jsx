import Card from "../comman/Card";
import {
  LuLightbulb,
  LuSettings,
  LuLaptop2,
  LuPencil,
  LuStar,
  LuMessagesSquare,
} from "react-icons/lu";
import Component from "../comman/Components";

const PCServices = () => {
  let data = [
    {
      id: 1,
      icon: <LuLightbulb />,
      heading: "Creative design",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 2,
      icon: <LuSettings />,
      heading: "Fully Customizable",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 3,
      icon: <LuLaptop2 />,
      heading: "Responsive",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 4,
      icon: <LuPencil />,
      heading: "Pixel Perfect",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 5,
      icon: <LuStar />,
      heading: "Free Updates",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
    {
      id: 6,
      icon: <LuMessagesSquare />,
      heading: "Customer Support",
      paragraph:
        "Lorem Ipsum. Proin gravi nibh vel velit auctor aliquet. Aenean sollicitudin, sagittis sem nibh.",
    },
  ];
  return (
    <>
      <Component className="bg-white text-[#8f8f8f] grid grid-cols-1 gap-2 lg:gap-x-0 xl:gap-x-6 lg:gap-y-12 xl:gap-y-12 justify-items-center items-center md:grid-cols-2 gap-y-5 lg:grid-cols-3 lg:gap-2 lg:px-6 xl:grid-cols-3">
        {data?.map((item, ind) => {
          return (
            <div key={ind}>
              <Card className="">
                <div className="grid grid-cols-4">
                  <div className="h-14 w-14 sm:h-14 sm:w-14 md:h-12 md:w-12 rounded-full items-center bg-[#ff5733] mt-2 flex flex-col justify-center mx-auto">
                    <span className="font-bold text-[28px] text-white">
                      {item.icon}
                    </span>
                  </div>
                  <div className="col-span-3 px-2 sm:px-1 md:px-1">
                    <span className="font-bold text-[18px]">
                      {item.heading}
                    </span>
                    <p className="py-2 leading-5 tracking-normal font-sans text-xs font-semibold md:leading-6 text-[13px] xl:text-justify">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </Component>
    </>
  );
};

export default PCServices;
