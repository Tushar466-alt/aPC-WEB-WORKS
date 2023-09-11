import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Component from "../comman/Components";

const Footer = () => {
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
      <Component className="grid sm:grid-rows-4 md:grid-rows-4 py-10 sm:px-4 md:px-4 lg:px-14 xl:px-14 bg-[#252525] text-[#707070] lg:grid-cols-4 xl:grid-cols-4 text-xs">
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
            <li className="border border-[#707070] p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="www.google.com">
                <BsInstagram />
              </a>
            </li>
            <li className="border border-[#707070] p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="www.google.com">
                <BsFacebook />
              </a>
            </li>
            <li className="border border-[#707070] p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="www.google.com">
                <BsLinkedin />
              </a>
            </li>
            <li className="border border-[#707070] p-1 rounded-sm m-[2px]">
              <a className="text-2xl" href="www.google.com">
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
                  {item.id === 1 || item.id === 2 ? <hr className="border-[#707070]" /> : null}
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
                  className="border border-[#707070] hover:border-none px-4 py-1 hover:bg-[yellow] hover:text-black font-bold"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-4 my-auto lg:my-0 xl:my-0">
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
        </div>
      </Component>

      <div className="text-center bg-[#1c1c1a] text-[#707070] font-bold py-4 text-xs">
        <span>
          Copyright &copy; 2021 &nbsp;
          <a href="www.google.com">
            <sup>a</sup>PC WEB WORKS 2023!
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
