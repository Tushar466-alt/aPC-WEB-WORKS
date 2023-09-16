import { Routes, Route } from "react-router-dom";
import PCHome from "../pages/PCHome";
import PCBlog from "../pages/PCBlog";
import PCServices from "../pages/PCServices";
import PCAboutUs from "../pages/PCAboutUs";
import PCContactUs from "../pages/PCContactUs";
import StaticPricingSubPage from "../pages/sub-pages/StaticPricingSubPage";
import DynamicPricingSubPage from "../pages/sub-pages/DynamicPricingSubPage";
import EcommercePricingSubPage from "../pages/sub-pages/EcommercePricingSubPage";
import Auth from "../components/auth-ls/Auth";

const Routing = () => {
  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<PCHome />} />
        <Route path="/blog" element={<PCBlog />} />
        <Route path="/services" element={<PCServices />} />
        <Route path="/aboutUs" element={<PCAboutUs />} />
        <Route path="/contactUs" element={<PCContactUs />} />
        <Route path="/Static Website" element={<StaticPricingSubPage />} />
        <Route path="/Dynamic Website" element={<DynamicPricingSubPage />} />
        <Route path="/E-Commerce Website" element={<EcommercePricingSubPage />} />
        <Route path="auth-ls" element={<Auth />} />
      </Routes>
      </div>
    </>
  );
};

export default Routing;