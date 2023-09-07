import React from "react";
import Services from "../components/Services.jsx";
import LProject from "../components/LProject.jsx";
import Pricing from "../components/Pricing.jsx";
import Footer from "../components/footer/Footer.jsx";
import {motion} from 'framer-motion';

const PCHome = () => {
  return (
    <motion.div
    initial = {{opacity: 0}}
    animate= {{opacity: 1}}
    exit = {{opacity: 0}}
    transition = {{duration: 2}}>
      <Services />
      <LProject />
      <Pricing />
      <Footer />
    </motion.div>
  );
};

export default PCHome;
