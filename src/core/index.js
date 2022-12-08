import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../about/about";
import { allRoutes } from "../constant/path";
import Contact from "../contact/contact";
import Header from "../header/header";
import Form from "../page-one/form/forms";
import PageOne from "../page-one/page-one";
import Services from "../services/services";
function Home() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path={allRoutes.pageOne} element={<PageOne />} />
            <Route path={allRoutes.about} element={<About />} />
            <Route path={allRoutes.services} element={<Services />} />
            <Route path={allRoutes.contact} element={<Contact />} />
            <Route path={allRoutes.form} element={<Form />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}
export default Home;
