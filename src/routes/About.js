import React from "react";
import Navbar from "../components/navbar/Navbar";
import Moreabout from "../components/moreabout/Moreabout";
import Automation from "../components/automation/Automation";
import Aboutpictures from "../components/aboutpictures/Aboutpictures";
import Work from "../components/work/Work";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Moreabout />
      <Automation />
      <Aboutpictures/>
      <Work />
      <Footer />
    </>
  );
}

export default Home;