import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Responsive from "./responsive-bar/responsive";
import { allRoutes } from "../constant/path";
import logo from "../images/logo.svg";
import Menu from "./menu/menu";
function Header() {
  return (
    <>
      <div className="header">
        <div className="intro">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="name-title">
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="menu">
          <Menu />
          <div class="dropdown">
            <span>More Info </span>
            <div class="dropdown-content">
              <Menu />
            </div>
          </div>
        </div>
        <div className="hamburger">
          <Responsive />
        </div>
      </div>
    </>
  );
}
export default Header;
