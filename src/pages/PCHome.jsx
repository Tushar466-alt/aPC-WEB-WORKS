import React from "react";
import Services from "../components/home-comman/Services";
import ContactUs from "../components/home-comman/ContactUs/ContactUs"
import Map from ".././components/map/Map"
import Welcome from "../components/welcomPage/Welcom";
// import OurSkills from "../components/welcomPage/OurSkills"
import WeDo from "../components/welcomPage/WeDo";

const PCHome = () => {
  return (
    // <motion.div
    // initial = {{opacity: 0}}
    // animate= {{opacity: 1}}
    // exit = {{opacity: 0}}
    // transition = {{duration: 2}}>

    //   <Services />
    //   <LProject />
    //   <Pricing />
    //   <Footer />
    // </motion.div>
    <>
      <div>
        <Welcome />
        <Services />
        <WeDo />
        {/* <OurSkills /> */}
        <ContactUs />
        <Map />
      </div>
    </>
  );
};

export default PCHome;
