import React from "react";
import Services from "../components/services-common/Services";
import ContactUs from "../components/home-comman/ContactUs/ContactUs"

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
        <Services />
        <ContactUs />
      </div>
    </>
  );
};

export default PCHome;
