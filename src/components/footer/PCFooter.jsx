import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const PCFooter = () => {
  let tags = [
    "Business",
    "Design",
    "Photography",
    "Sport",
    "Tech",
    "Template",
    "Theme",
    "Travel",
    "Website",
    "Wordpress",
  ];

  let contactDetail = [
    {
      id: "1",
      key: "Address",
      value: "5,3rd Cross, Msr Industrial Estate, Mathikere",
    },
    { id: "2", key: "E-Mail", value: "info@apcwebworks.com" },
    { id: "3", key: "Phone", value: "(213) 50502653, (221) 20201556" },
    { id: "4", key: "Fax", value: "(213) 0000 124556" },
  ];

  let recentPost = [
    { id: "1", post: "Fire Up Your Motivation", date: "April 21, 2022" },
    { id: "2", post: "Motivate Yourself", date: "April 21, 2022" },
    { id: "3", post: "The Power of Your Dreams", date: "April 21, 2022" },
  ];

  return (
    <>
      <div className="grid sm:grid-rows-4 md:grid-rows-4 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-slate-900 text-white lg:grid-cols-4 xl:grid-cols-4 text-xs">
        <div className="p-4 my-auto lg:my-0 xl:my-0">
          <span className="font-bold text-2xl ml-[8px]">
            <sup>a</sup>
            <span>PC Web Works</span>
          </span>
          <p className="px-2 py6 mt-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            totam veritatis. Nemo necessitatibus aspernatur sunt quisquam ipsa
            illum quidem, harum esse ipsum, repellendus, neque ratione quia hic
            vel rem voluptates!
          </p>
          <ul className="flex justify-start mt-3 ml-[6px]">
            <li className="border p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="#">
                <BsInstagram />
              </a>
            </li>
            <li className="border p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="#">
                <BsFacebook />
              </a>
            </li>
            <li className="border p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="#">
                <BsTwitter />
              </a>
            </li>
            <li className="border p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="#">
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 my-auto lg:my-0 xl:my-0">
          <span className="font-bold text-2xl ml-[8px]">Recent Posts</span>
          <ul className="flex flex-col mt-3 ml-[6px]">
            {recentPost?.map((item, ind) => {
              return (
                <>
                  <li key={ind} className="flex flex-col py-3">
                    <span>{item.post}</span>
                    <span>{item.date}</span>
                  </li>
                  {item.id == 1 || item.id == 2 ? <hr /> : null}
                </>
              );
            })}
          </ul>
        </div>
        <div className="p-4 my-auto lg:my-0 xl:my-0">
          <span className="font-bold text-2xl ml-[8px]">Tags</span>
          <div className="flex flex-wrap gap-2 ml-[6px] mt-4">
            {tags?.map((item, ind) => {
              return (
                <button
                  key={ind}
                  className="border px-4 py-1 hover:bg-slate-800"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <motion.div className="p-4 my-auto lg:my-0 xl:my-0">
          <span className="font-bold text-2xl ml-[8px]">Contact Us</span>
          <ul className="flex flex-col mt-3 ml-[6px]">
            {contactDetail?.map((item, ind) => {
              return (
                <li key={ind} className="flex flex-col py-3">
                  <p>
                    <span className="text-sm font-bold">{item.key} : </span>
                    {item.value}
                  </p>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>

      <div className="text-center bg-slate-950 text-white py-4 text-xs">
        <span>
          Copyright &copy; 2021 &nbsp;
          <a href="#">
            <sup>a</sup>PC WEB WORKS 2023!
          </a>
        </span>
      </div>
    </>
  );
};

export default PCFooter;
