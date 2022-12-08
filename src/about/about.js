import React, { useState } from "react";
import Header from "../header/header";
import "./aboutUs.css";
function About() {
  const [click, setClick] = useState(false);
  const boxNo = [1, 2, 3, 4];
  const handleChange = () => {
    setClick(true);
    if (click) {
      setClick(false);
    }
  };
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="title">
          <h1>
            <span className="latter">T</span>he Titl
            <span className="latter">e</span>
          </h1>
        </div>
        <div className="about-content">
          <div className="content">
            <p className="para">
              Technology is the application of knowledge to reach practical
              goals in a specifiable and reproducible way. The word technology
              may also mean the product of such an endeavor. The use of
              technology is widely prevalent in medicine, science, industry,
              communication, transportation, and daily life. Technologies
              include physical objects like utensils or machines and intangible
              tools such as software. Many technological advancements have led
              to societal changes.
            </p>
          </div>
          <div className="sections">
            <div class="grid-container">
              <div class="grid-item change-color">13</div>
              <div class="grid-item change-color">14</div>
              <div class="grid-item change-color">15</div>
              <div class="grid-item change-color">16</div>
              <div class="grid-item change-color">17</div>
              <div class="grid-item">18</div>
              <div class="grid-item">19</div>
              <div class="grid-item change-color">16</div>
              <div class="grid-item change-color">21</div>
              <div class="grid-item change-color">21</div>
              <div class="grid-item change-color">21</div>
              <div class="grid-item other-color">24</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-two">
        {boxNo.map((item) => (
          <>
            {click === false && (
              <button onClick={handleChange} className="box">
                click Me
              </button>
            )}
            {click === true && (
              <button onClick={handleChange} className="box-click">
                circle
              </button>
            )}
          </>
        ))}
      </div>
    </>
  );
}
export default About;
