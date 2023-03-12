import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../asserts/image1.jpg";
import "../AboutMySelf/AboutMyself.css";
const AboutMyself = () => {
  return (
    <section className="about">
      <div className="about-img">{/* <img src={image1} alt=""></img> */}</div>
      <div className="about-content">
        <h2 className="heading">
          About<span> Me</span>
        </h2>
        <h3>MERN Stack Developer</h3>
        <p>
          Hi, I’m Kasib Mohammad Chowdhury. I’m a passionate and dedicated web
          developer working in this industry for more than 1 years and studied
          at programminghero.com. Looking to join an organization where I can
          utilize my skills in web development. I am a fast-building developer
          who works well in a team. I have worked with data structures and I am
          really interested in algorithms and high-level technologies. I have
          very good visual thinking skills also a very organized developer. I
          have worked with real clients in real-time directly speaking to them
          and getting the work done as per requirement. Overall my development
          skills and my personality are very stable. I can code very efficiently
          and I like to bring creativity to my work. I want to be an expert
          programmer with various kinds of skills and hope to join one of the
          leading tech companies.
        </p>
      </div>
    </section>
  );
};

export default AboutMyself;
