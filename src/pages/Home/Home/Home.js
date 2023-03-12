import React from "react";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";

import Projects from "../Projects/Projects/Projects";
const Home = () => {
  return (
    <div className="my-20">
      {/* <About></About> */}
      <Banner></Banner>
      {/* <Skills></Skills> */}
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Home;
