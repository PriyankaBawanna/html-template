import React from "react";
import Header from "../header/header";
import "./contact.css";
import { RiCommunityFill, RiMailSendFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { allRoutes } from "../constant/path";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="address-section">
          <div className="address">
            <b>Address</b>
          </div>
          <div className="address-icon">
            <RiCommunityFill />
            <RiMailSendFill />
          </div>
        </div>
        <div className="address-section">
          <div className="address">
            <b>Quick Links</b>
          </div>
          <div className="address-icon">
            <Link className="about-us" to={allRoutes.about}>
              About Us
            </Link>
          </div>
        </div>

        <div className="address-section">
          <div className="address">
            <b>Popular Links</b>
          </div>
          <div className="address-icon">
            <Link className="about-us" to={allRoutes.about}>
              About Us
            </Link>
          </div>
        </div>

        <div className="address-section">
          <div className="address">
            <b>Singups</b>
          </div>
          <div className="social-media-icon">
            <div>
              <a href="https://github.com/">
                <AiOutlineGithub />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
