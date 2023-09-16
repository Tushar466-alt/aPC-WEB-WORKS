import React, { useEffect } from 'react';
import { BsInstagram, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const PCComingsoon = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <>
      <div className='h-screen flex justify-center'>
      <div className='flex flex-col p-[100px] sm:p-10 md:p-10 items-center h-[600px] w-full my-auto'>
        <span className='text-2xl font-bold'>Coming Soon!</span>
        <div className="flex justify-center mt-4">
            <hr className="border-b-1 border-gray-500 w-[100px]" />
            <div className="w-[14px] h-[14px] bg-[yellow] rounded-sm mt-[-7px] mx-3"></div>
            <hr className="border-b-1 border-gray-500 w-[100px]" />
          </div>
          <span className='text-sm font-bold mt-4'>Work in progress... We will be back in.</span>
          <span className='text-8xl sm:text-4xl md:text-4xl font-bold mt-20'>11 : 08 : 02 : 45</span>

          <ul className="flex justify-start mt-14 ml-[6px]">
            <li className="border border-black hover:bg-[yellow] p-4 rounded-sm m-[2px]">
              <a className="text-2xl text-black" href="www.google.com">
                <BsInstagram />
              </a>
            </li>
            <li className="border border-black hover:bg-[yellow] p-4 rounded-sm m-[2px]">
              <a className="text-2xl text-black" href="https://www.facebook.com/people/Apc-Web-Works/pfbid0hT3pvacLZxqoDxQWhTEo3AaMZheQrES8V4CJPRB45AtE4TZnNwbwzvVGnCoS2tMTl/">
                <BsFacebook />
              </a>
            </li>
            <li className="border border-black hover:bg-[yellow] p-4 rounded-sm m-[2px]">
              <a className="text-2xl text-black" href="https://www.linkedin.com/in/apc-web-works-a6a94828b/">
                <BsLinkedin />
              </a>
            </li>
            <li className="border border-black hover:bg-[yellow] p-4 rounded-sm m-[2px]">
              <a className="text-2xl text-black" href="www.google.com">
                <BsWhatsapp />
              </a>
            </li>
          </ul>
      </div>
    </div>
    </>
  )
}

export default PCComingsoon;

