import React from "react";
import { motion } from "framer-motion";

const PCPricing = () => {
  let pricing = [
    { id: 1, type: "Basic", price: "00" },
    { id: 2, type: "Professional", price: "99" },
    { id: 3, type: "Business", price: "199" },
    { id: 4, type: "Unlimited", price: "299" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 gap-2 bg-green-200">
        <div className="text-center">
          <span className="font-bold text-4xl text-gray-800 sm:text-3xl">
            Pricing
          </span>
          <p className="px-2 mx-auto mt-2 text-gray-600 py-4 text-[14px] font-semibold tracking-tight lg:w-[50%] xl:w-[50%]">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8 lg:grid-cols-4 xl:grid-cols-4">
          {pricing?.map((item, ind) => {
            return (
              <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                key={ind}
                className="flex flex-wrap w-full bg-slate- text-center justify-center border border-black pb-6 shadow-md bg-white rounded-lg overflow-hidden"
              >
                <span
                  className={`w-full py-4 text-2xl font-semibold ${
                    item.id === 3 ? "bg-[#ff0000d6] text-white" : "bg-[yellow]"
                  }`}
                >
                  {item?.type}
                </span>
                <span className="w-full py-6 text-3xl">
                  <sup className="text-xl">₹</sup>
                  {item?.price}
                  <span className="text-sm">/month</span>
                </span>
                <ul className="w-full px-14 lg:px-6 xl:px-10">
                  <li className="py-4 md:py-[13px] lg:py-[9px] xl:py-[12px] lg:text-sm font-sans border-y-[1px]">
                    Up to 100 users
                  </li>
                  <li className="py-4 md:py-[13px] lg:py-[9px] xl:py-[12px] lg:text-sm font-sans border-y-[1px]">
                    Theme update
                  </li>
                  <li className="py-4 md:py-[13px] lg:py-[9px] xl:py-[12px] lg:text-sm font-sans border-y-[1px]">
                    Support of forum
                  </li>
                  <li className="py-4 md:py-[13px] lg:py-[9px] xl:py-[12px] lg:text-sm font-sans border-y-[1px]">
                    Photoshop file
                  </li>
                  <li className="py-4 md:py-[13px] lg:py-[9px] xl:py-[12px] lg:text-sm font-sans border-y-[1px]">
                    Customer support
                  </li>
                </ul>
                <button
                  className={`border w-[65%] py-2 mt-10 text-base font-bold ${
                    item.id === 3 ? "bg-[#ff0000d6] text-white" : "bg-[yellow]"
                  }`}
                >
                  Sing Up
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PCPricing;
