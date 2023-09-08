// import React from "react";
// import "../styles/coming-soon.css";

// const PCComingsoon = () => {
//   let lauchingDate = new Date(2023, 8, 10);

//   let days;
//   let minutes;
//   let seconds;

//   setInterval(() => {
//     const TodaysDate = new Date();

//     const timeDifferance = lauchingDate - TodaysDate;

//     const seconds = Math.floor(timeDifferance / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     const years = Math.floor(days / 365);
//     const remainingDays = days % 365;
//     const remainingHours = hours % 24;
//     const remainingMinutes = minutes % 60;
//     const remainingSeconds = seconds % 60;

//     const dayEle = document.getElementById("days");
//     dayEle.innerHTML = remainingDays + ":";

//     const hourEle = document.getElementById("hours");
//     hourEle.innerHTML = remainingHours + ":";

//     const minutesEle = document.getElementById("minutes");
//     minutesEle.innerHTML = remainingMinutes + ":";

//     const secondsEle = document.getElementById("seconds");
//     secondsEle.innerHTML = remainingSeconds;
//   }, 1000);
//   return (
//     <>
//       <div className="wrapper">
//         <main className="main">
//           <section>
//             <h3>Coming Soon</h3>
//             <div className="divider_block">
//               <hr />
//               <div className="center_block"></div>
//               <hr />
//             </div>
//             <p>Work in progress..We will back in</p>
//           </section>

//           <section>
//             <div className="input_block">
//               <div className="blocks">
//                 <p className="time" id="days">
//                   0:
//                 </p>
//                 <span>Days</span>
//               </div>
//               <div className="blocks">
//                 <p className="time" id="hours">
//                   0:
//                 </p>
//                 <span>Hours</span>
//               </div>
//               <div className="blocks">
//                 <p className="time" id="minutes">
//                   0:
//                 </p>
//                 <span>Minutes</span>
//               </div>
//               <div className="blocks">
//                 <p className="time" id="seconds">
//                   0
//                 </p>
//                 <span>Seconds</span>
//               </div>
//             </div>
//           </section>

//           <section>
//             <div className="icon">
//               <div className="icon_block"></div>
//               <div className="icon_block"></div>
//               <div className="icon_block"></div>
//               <div className="icon_block"></div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default PCComingsoon;


import React, { useEffect } from "react";
import "../styles/coming-soon.css";
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";


const PCComingsoon = () => {
  useEffect(() => {
    const launchDate = new Date(2023, 9, 10);

    const interval = setInterval(() => {
      const todayDate = new Date();

      const timeDifference = launchDate - todayDate;

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

    //   const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      const remainingHours = hours % 24;
      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;

      document.getElementById("days").innerHTML = `${remainingDays}:`;
      document.getElementById("hours").innerHTML = `${remainingHours}:`;
      document.getElementById("minutes").innerHTML = `${remainingMinutes}:`;
      document.getElementById("seconds").innerHTML = remainingSeconds.toString();

      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <main className="main">
        <section>
          <h3>Coming Soon</h3>
          <div className="divider_block">
            <hr />
            <div className="center_block"></div>
            <hr />
          </div>
          <p>Work in progress... We will be back in</p>
        </section>

        <section>
          <div className="input_block">
            <div className="blocks">
              <p className="time" id="days">
                0:
              </p>
              <span>Days</span>
            </div>
            <div className="blocks">
              <p className="time" id="hours">
                0:
              </p>
              <span>Hours</span>
            </div>
            <div className="blocks">
              <p className="time" id="minutes">
                0:
              </p>
              <span>Minutes</span>
            </div>
            <div className="blocks">
              <p className="time" id="seconds">
                0
              </p>
              <span>Seconds</span>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="icon text-2xl text-[yellow]">
            <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsInstagram /></div>
            <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsFacebook /></div>
            <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsTwitter /></div>
            <div className="icon_block flex justify-center items-center bg-black opacity-80 hover:text-black"><BsWhatsapp /></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PCComingsoon;
