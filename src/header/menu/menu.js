import React from "react";
import { Link } from "react-router-dom";
import { allRoutes } from "../../constant/path";
export default function Menu() {
  return (
    <>
      <Link to={allRoutes.about} className="link">
        About
      </Link>
      <Link to={allRoutes.services} className="link">
        Services
      </Link>
      <Link to={allRoutes.contact} className="link">
        Contact
      </Link>
      <Link to={allRoutes.pageOne} className="link">
        From
      </Link>
    </>
  );
}
