import React from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm [Aryansh Jain]</h1>
        <p>Welcome to my portfolio website</p>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
