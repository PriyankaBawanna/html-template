import React from "react";
import "./form.css";
function Form() {
  return (
    <div className="form">
      <h2 className="contact">Contact us</h2>
      <div className="text-input">
        <label className="label-form">Name</label>
        <input type="text" placeholder="Your Name " className="input-data" />
      </div>
      <div className="text-input">
        <label className="label-form">Email</label>
        <input type="text" placeholder="Your Email " className="input-data" />
      </div>
      <div className="text-input">
        <label className="label-form">Contact No.</label>
        <input
          type="Number"
          placeholder="contact Number "
          className="input-data"
        />
      </div>

      <div className="text-input">
        <label className="label-form">Address</label>
        <input type="text" placeholder="Address " className="input-data" />
      </div>
      <button className="submit-btn">Submit </button>
    </div>
  );
}
export default Form;
