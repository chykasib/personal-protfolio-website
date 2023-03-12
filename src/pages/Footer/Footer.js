import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright © 2023 - All Right Reserved By Chowdhury Kasib</p>
      </div>
      <div className="footer-iconTop">
        <Link to={"/"}>
          <i class="bx bx-up-arrow-alt"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
