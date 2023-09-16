import React, { useEffect } from "react";
import Routes from "./routes";
import UpScrollArrow from "./components/comman/UpScrollArrow";
import Footer from "./components/footer/Footer";
import PCNavbar from './components/navbar/PCNavbar.jsx';

function App() {
  return (
    <>
      <PCNavbar />
      <Routes />
      <UpScrollArrow />
      <Footer />
    </>
  );
}

export default App;
