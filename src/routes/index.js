import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PCHome from "../pages/PCHome";
import PCBlog from "../pages/PCBlog";
import PCServices from "../pages/PCServices";
import PCAboutUs from "../pages/PCAboutUs";
import PCContactUs from "../pages/PCContactUs";
import PCNavbar from "../components/navbar/PCNavbar";

const Routing = () => {
  return (
    <Router>
      <PCNavbar />
      <Routes>
        <Route path="/" element={<PCHome />} />
        <Route path="/blog" element={<PCBlog />} />
        <Route path="/services" element={<PCServices />} />
        <Route path="/aboutUs" element={<PCAboutUs />} />
        <Route path="/contactUs" element={<PCContactUs />} />
      </Routes>
    </Router>
  );
};

export default Routing;