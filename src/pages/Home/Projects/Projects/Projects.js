import React from "react";
import image1 from "../../../../asserts/learing.jpg";
import image2 from "../../../../asserts/resale.jpg";
import image3 from "../../../../asserts/cloud.jpg";
import cse1 from "../../../../asserts/learing1.jpg";
import cse2 from "../../../../asserts/learing2.jpg";
import cse3 from "../../../../asserts/learing3.jpg";
import reseller1 from "../../../../asserts/resale1.jpg";
import reseller2 from "../../../../asserts/resale2.jpg";
import reseller3 from "../../../../asserts/resale3.jpg";
import cloud1 from "../../../../asserts/cloud1.png";
import cloud2 from "../../../../asserts/cloud2.jpg";
import cloud3 from "../../../../asserts/cloud3.jpg";
import Project from "../Project/Project";
const Projects = () => {
  const projects = [
    {
      id: 1,
      picture: image1,
      name: "Keystone Cse Courses",
      images: [cse1, cse2, cse3],
      details: [
        "Single educational learning website",
        "Users can log in via google, GitHub, or the email password system.",
        "If the user login then the user downloads the course outline.",
      ],
      technologies: [
        "react-bootstrap",
        "react-router-Dom",
        "react-pdf",
        "firebase",
        "react-pdf",
        "react-toastify",
        "react-toggle-dark-mode",
        "express.js",
        "vercel",
      ],
      Links: [
        {
          live: "https://learning-cse.web.app/",
        },
        {
          client: "https://github.com/chykasib/learning-client-side-repo",
        },
        {
          server: "https://github.com/chykasib/learning-server-side-repo",
        },
      ],
    },
    {
      id: 2,
      picture: image2,
      name: "T-phone-reseller-shop",
      images: [reseller1, reseller2, reseller3],
      details: [
        "Simple e-commerce website with buyer login via google and product purchasing functionality.",
        "A Seller login by email and password. The user can add and delete any product if the admin verifies the seller",
        "Full Website controlled by admin. Admin can delete any user or seller.",
      ],
      technologies: [
        "tailwindCss",
        "react-router-Dom",
        "axios",
        "firebase",
        "daisyui",
        "react-hook-form",
        "react-toggle-dark-mode",
        "express.js",
        "vercel",
        "react-hot-toast",
        "mongodb",
        "jsonwebtoken",
      ],
      Links: [
        {
          live: "https://t-phone-reseller-shop.web.app/",
        },
        {
          client: "https://github.com/chykasib/phone-reseller-client-repo",
        },
        {
          server: "https://github.com/chykasib/phone-reseller-server-repo",
        },
      ],
    },
    {
      id: 3,
      picture: image3,
      name: "Rock Cloud Kitchen",
      images: [cloud1, cloud2, cloud3],
      details: [
        "Simple personalized homemade food shop and delivery services.",
        "Users can log in by GitHub, google, or email-password system.",
        "If the user logs in, the user can add a review, see his/her review, and delete the review.",
      ],
      technologies: [
        "react-bootstrap",
        "react-router-Dom",
        "react-pdf",
        "firebase",
        "react-pdf",
        "react-toastify",
        "react-toggle-dark-mode",
        "express.js",
        "vercel",
      ],
      Links: [
        {
          live: "https://rock-cloud-kitchen.web.app/",
        },
        {
          client: "https://github.com/chykasib/cloud-kitchen-client-repo",
        },
        {
          server: "https://github.com/chykasib/cloud-kitchen-server-repo",
        },
      ],
    },
  ];
  return (
    <>
      <h1 className="text-5xl my-10 text-white">Projects Area</h1>
      <div className="grid lg:grid-cols-3  gap-6">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </>
  );
};

export default Projects;
