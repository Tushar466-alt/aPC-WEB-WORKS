// // import React, { useEffect } from "react";
// import "../styles/coming-soon.css";
// import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";


// const PCComingsoon = () => {
//   // useEffect(() => {
//   //   const launchDate = new Date(2023, 9, 10);

//   //   const interval = setInterval(() => {
//   //     const todayDate = new Date();

//   //     const timeDifference = launchDate - todayDate;

//   //     const seconds = Math.floor(timeDifference / 1000);
//   //     const minutes = Math.floor(seconds / 60);
//   //     const hours = Math.floor(minutes / 60);
//   //     const days = Math.floor(hours / 24);

//   //   //   const years = Math.floor(days / 365);
//   //     const remainingDays = days % 365;
//   //     const remainingHours = hours % 24;
//   //     const remainingMinutes = minutes % 60;
//   //     const remainingSeconds = seconds % 60;

//   //     document.getElementById("days").innerHTML = `${remainingDays}:`;
//   //     document.getElementById("hours").innerHTML = `${remainingHours}:`;
//   //     document.getElementById("minutes").innerHTML = `${remainingMinutes}:`;
//   //     document.getElementById("seconds").innerHTML = remainingSeconds.toString();

//   //     if (timeDifference <= 0) {
//   //       clearInterval(interval);
//   //     }
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div className="wrapper">
//       <main className="main">
//         <section>
//           <h3>Coming Soon</h3>
//           <div className="divider_block">
//             <hr />
//             <div className="center_block"></div>
//             <hr />
//           </div>
//           <p>Work in progress... We will be back in</p>
//         </section>

//         <section>
//           <div className="input_block">
//             <div className="blocks">
//               <p className="time" id="days">
//                 0:
//               </p>
//               <span>Days</span>
//             </div>
//             <div className="blocks">
//               <p className="time" id="hours">
//                 0:
//               </p>
//               <span>Hours</span>
//             </div>
//             <div className="blocks">
//               <p className="time" id="minutes">
//                 0:
//               </p>
//               <span>Minutes</span>
//             </div>
//             <div className="blocks">
//               <p className="time" id="seconds">
//                 0
//               </p>
//               <span>Seconds</span>
//             </div>
//           </div>
//         </section>

//         <section className="mt-10">
//           <div className="icon text-2xl text-[yellow]">
//             <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsInstagram /></div>
//             <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsFacebook /></div>
//             <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsTwitter /></div>
//             <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsWhatsapp /></div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default PCComingsoon;

import React from 'react';
import { BsInstagram, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const PCComingsoon = () => {
  return (
    <>
      <div className='h-screen flex justify-center'>
      <div className='flex flex-col p-[100px] sm:p-10 md:p-10 items-center h-[600px] w-full my-auto'>
        <span className='text-2xl font-bold'>Coming Soon!</span>
        <div className="flex justify-center mt-4">
            <hr className="border-b-1 border-gray-500 w-[100px]" />
            <div className="w-[14px] h-[14px] bg-[yellow] rounded-sm relative top-[-7px] mx-3"></div>
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

