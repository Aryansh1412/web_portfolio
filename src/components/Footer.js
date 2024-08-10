import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} Made by <span className="footer-name">Aryansh Jain</span>.{" "}
      </p>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
