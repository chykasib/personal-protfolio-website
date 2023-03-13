import React from "react";
import "../Projects/Project.css";
import image1 from "../../../../asserts/learing.jpg";
import image2 from "../../../../asserts/resale.jpg";
import image3 from "../../../../asserts/cloud.jpg";
const Projects = () => {
  return (
    <section className="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <div className="projects-container">
        <div className="projects-box">
          <img src={image1} alt="" />
          <h3>Keystone Cse Courses</h3>
          <ul>
            <li>Single educational learning website</li>
            <li>
              Users can log in via google, GitHub, or the email password system.
            </li>
            <li>
              If the user login then the user downloads the course outline.
            </li>
          </ul>
          <div className="btn-f">
            <a href={"https://learning-cse.web.app/"} className="btn-home">
              Live Site
            </a>
            <a
              href={"https://github.com/chykasib/learning-client-side-repo"}
              className="btn-home"
            >
              Client Code
            </a>
            <a
              href={"https://github.com/chykasib/learning-server-side-repo"}
              className="btn-home"
            >
              server Code
            </a>
          </div>
        </div>
        <div className="projects-box">
          <img src={image2} alt="" />
          <h3>T-phone-reseller-shop</h3>
          <ul>
            {/* <li>
              Simple e-commerce website with buyer login via google and product
              purchasing functionality.
            </li> */}
            <li>
              A Seller login by email and password. The user can add and delete
              any product if the admin verifies the seller
            </li>
            <li>
              Full Website controlled by admin. Admin can delete any user or
              seller.
            </li>
          </ul>
          <div className="btn-f">
            <a
              href="https://t-phone-reseller-shop.web.app/"
              className="btn-home"
            >
              Live Site
            </a>
            <a
              href="https://github.com/chykasib/cloud-kitchen-client-repo"
              className="btn-home"
            >
              Client Code
            </a>
            <a
              href="https://github.com/chykasib/phone-reseller-server-repo"
              className="btn-home"
            >
              server Code
            </a>
          </div>
        </div>
        <div className="projects-box">
          <img src={image3} alt="" />
          <h3>Service Review Website</h3>
          <ul>
            {/* <li>
              Simple personalized homemade food shop and delivery services.
            </li> */}
            <li>
              Users can log in by GitHub, google, or email-password system.
            </li>
            <li>
              If the user logs in, the user can add a review, see his/her
              review, and delete the review.
            </li>
          </ul>
          <div className="btn-f">
            <a href="https://rock-cloud-kitchen.web.app/" className="btn-home">
              Live Site
            </a>
            <a
              href="https://github.com/chykasib/cloud-kitchen-client-repo"
              className="btn-home"
            >
              Client Code
            </a>
            <a
              href="https://github.com/chykasib/cloud-kitchen-server-repo"
              className="btn-home"
            >
              server Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
