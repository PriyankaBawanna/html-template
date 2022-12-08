import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "./responsive.css";
import Menu from "../menu/menu";

export default function Responsive() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="responsive-box">
          <Menu />
        </div>
      )}
    </>
  );
}
