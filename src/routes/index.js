import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PCHome from '../pages/PCHome'
import PCBlog from '../pages/PCBlog'
import PCPortfolio from '../pages/PCPortfolio'
import PCAboutUs from '../pages/PCAboutUs'
import PCContactUs from '../pages/PCContactUs'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PCHome />} />
        <Route path="/blog" element={<PCBlog />} />
        <Route path="/portfolio" element={<PCPortfolio />} />
        <Route path="/aboutUs" element={<PCAboutUs />} />
        <Route path="/contactUs" element={<PCContactUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
