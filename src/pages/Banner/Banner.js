import React from "react";
import { Link } from "react-router-dom";
import "../Banner/Banner.css";
import samplePDF1 from "../../asserts/resume of kasib chy.pdf";
import image from "../../asserts/image.jpg";
const Banner = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Kasib Mohammad Chowdhury</h1>
        <h3>
          And I'm a <span>MERN Stack Developer</span>
        </h3>
        <p>
          As a MERN stack developer with extensive back-end experience, I am
          keen to showcase my skills and collaborate with a company to develop
          exceptional web applications. My goal is to create high-quality
          websites and continuously improve my abilities.
        </p>
        <div className="social-media">
          <Link to={""}>
            <i class="bx bxl-facebook"></i>
          </Link>
          <Link to={""}>
            <i class="bx bxl-linkedin"></i>
          </Link>
          <Link to={""}>
            <i class="bx bxl-github"></i>
          </Link>
          <Link to={""}>
            <i class="bx bxl-twitter"></i>
          </Link>
        </div>
        <Link
          onClick={() => window.open(samplePDF1)}
          className="btn-home text-black"
          to={""}
        >
          View Resume
        </Link>
      </div>
      <div className="home-img">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Banner;
