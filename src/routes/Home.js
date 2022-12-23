import React from "react";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Product from "../components/product/Product";
import Moto from "../components/moto/Moto";
import Action from "../components/action/Action";
import Team from "../components/team/Team";
import Slide from "../components/slide/Slide";
import Work from "../components/work/Work";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Action />
      <Product />
      <Moto />
      <Team />
      <Slide />
      <Work />
      <Footer />
    </>
  );
}

export default Home;