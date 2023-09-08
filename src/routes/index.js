import PCHome from "../../pages/PCHome";
import { Route, Switch } from 'react-router-dom';
import PCBlog from "../pages/PCBlog";
import PCServices from "../pages/PCServices";
import PCAboutUs from "../pages/PCAboutUs.jsx"
import PCContactUs from "../pages/PCContactUs"

const PCNavbar = () => {
  return (
      <Switch>
        <Route path="/" element={<PCHome />} />
        <Route path="/blog" element={<PCBlog />} />
        <Route path="/services" element={<PCServices />} />
        <Route path="/aboutUs" element={<PCAboutUs />} />
        <Route path="/contactUs" element={<PCContactUs />} />
      </Switch>
  );
};
