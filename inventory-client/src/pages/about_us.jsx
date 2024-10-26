import React from "react";
import { Link } from 'react-router-dom';
import "../style/about_us.scss";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const about_us = () => {
  return (
    <>
      <div className="about-us-heading">
        <h1>About Developers</h1>
      </div>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card-photo">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="card-title">
            Mayank Matkar <br />
            <span>Backend Developer</span>
          </div>
          <div className="card-socials">
           <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
        <div className="card">
          <div className="card-photo">
            <img src={"/assets/profile.jpeg"} alt="" />
          </div>
          <div className="card-title">
            Aditya Patel <br />
            <span>Frontend Developer</span>
          </div>
          <div className="card-socials">
          <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
        <div className="card">
          <div className="card-photo"></div>
          <div className="card-title">
            JOHN DOE <br />
            <span>Fullstack dev &amp; UX UI</span>
          </div>
          <div className="card-socials">
          <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
        <div className="card">
          <div className="card-photo"></div>
          <div className="card-title">
            JOHN DOE <br />
            <span>Fullstack dev &amp; UX UI</span>
          </div>
          <div className="card-socials">
          <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default about_us;
