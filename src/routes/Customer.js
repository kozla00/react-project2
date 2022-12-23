import React from "react";
import Navbar from "../components/navbar/Navbar";
import Ourcustomer from "../components/ourcustomer/Ourcustomer";
import Work from "../components/work/Work";
import Footer from "../components/footer/Footer";

function Customer() {
  return (
    <>
      <Navbar />
      <Ourcustomer />
      <Work />
      <Footer />
    </>
  );
}

export default Customer;