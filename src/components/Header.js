import React from "react";
import "./Header.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="social-media">
          <a href="https://x.com/AryanshJain3" target="_blank" rel="">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="">
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/aryansh_jain_/"
            target="_blank"
            rel=""
          >
            <FaInstagram />
          </a>
          <a href="https://github.com/Aryansh1412" target="_blank" rel="">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="header-content">
        <div className="logo">
          <h1>AJ</h1>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
