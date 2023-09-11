import React from "react";
import Item from "./Item/Item";

function OurSkills() {
  let itemData = [
    {
      percentage: 65,
      skillName: "HTML",
      animaton: "animate-dashAnimation",
    },
    {
      percentage: 80,
      skillName: "CSS",
      animaton: "animate-dashAnimation2",
    },
    {
      percentage: 95,
      skillName: "REACT",
      animaton: "animate-dashAnimation3",
    },
    {
      percentage: 71,
      skillName: "NODE",
      animaton: "animate-dashAnimation4",
    },
  ];

  return (
    <>
      <div className=' pt-10 pb-10 flex justify-around  bg-[url("https://okab.pixeldima.com/wp-content/uploads/2016/05/video-bg.jpg")] bg-cover bg-center bg-fixed -z-10 relative sm:bg-sticky sm:pt-0 sm:pb-0 md:bg-sticky md:pt-0 md:pb-0  '>
        <div className="absolute left-0 top-0 h-full w-full -z-10 bg-black opacity-40 flex justify-center">
        </div>

        <div className="h-1/4 w-4/5 flex justify-around align-center  sm:flex-col sm:my-18 sm:align-stretch  md:flex-col md:my-18 md:align-stretch ">
          {itemData.map((i, index) => (
            <Item
              key={index}
              percentage={i.percentage}
              skillName={i.skillName}
              animaton={i.animaton}
            />
          ))}
          {/* <Item percentage={65} skillName={'HTML'} className></Item> */}
        </div>
      </div>
    </>
  );
}

export default OurSkills;
