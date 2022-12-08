import React, { useState } from "react";
import Header from "../header/header";
import "../page-one/pageOne.css";
import Form from "./form/forms";
import thankYou from "../images/thankYou.jpg";
import { Link } from "react-router-dom";
import { allRoutes } from "../constant/path";

export default function PageOne() {
  const [showFrom, setShowFrom] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const handleForm = () => {
    setShowFrom(true);
    setShowImage(false);
  };
  const handleImage = () => {
    setShowImage(true);
    setShowFrom(false);
  };
  return (
    <>
      <Header />
      <div className="background-pageOne">
        <div className="dynamic-content">
          {showFrom && <Form />}
          {showImage && (
            <div className="img">
              <img src={thankYou} className="dynamic-content" />
              <div className="form-link">
                <button className="btn" onClick={handleForm}>
                  Contact us
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="btn-group">
          <button className="btn" onClick={handleImage}>
            Image
          </button>
          <button className="btn" onClick={handleForm}>
            From
          </button>
        </div>
      </div>
    </>
  );
}
