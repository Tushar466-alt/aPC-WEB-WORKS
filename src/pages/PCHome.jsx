import React from "react";
import PCServices from "../components/PCServices.jsx";
import PCLProject from "../components/PCLProject.jsx";
import PCPricing from "../components/PCPricing.jsx";
import PCFooter from "../components/footer/PCFooter.jsx";
import {motion} from 'framer-motion';

const PCHome = () => {
  return (
    <motion.div
    initial = {{opacity: 0}}
    animate= {{opacity: 1}}
    exit = {{opacity: 0}}
    transition = {{duration: 2}}>
      <PCServices />
      <PCLProject />
      <PCPricing />
      <PCFooter />
    </motion.div>
  );
};

export default PCHome;
