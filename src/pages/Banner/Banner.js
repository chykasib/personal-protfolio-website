import React from "react";
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
          <a href="https://www.facebook.com/chowdhury.kasib/">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/kasib-mohammad-chowdhury-b4b2b5244/">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/chykasib">
            <i class="bx bxl-github"></i>
          </a>
          <a href="kasib.md.chy@gmail.com">
            <i class="bx bxl-gmail"></i>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1YohfQ056klbdf7RmyJHT2zs8_sIqwshG/view?usp=share_link"
          className="btn-home text-black"
        >
          View Resume
        </a>
      </div>
      <div className="home-img">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Banner;
