import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Titel from "./Component/Titel/Titel";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";

const App = () => {
  const programData = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Titel subtitel="OUR PROGRAM" titel="What We Offer" />
        <div id="programs">
          <Programs />
        </div>
        {/* <Programs/> */}
        <div id="about">
          <About />
        </div>
        <Titel subtitel="GALLERY" titel="Campus Photos" />
        <div id="campus">
          <Campus />
        </div>
        <Titel subtitel="TESTIMONIALS" titel="What Students Says" />
        <div id="testimonials">
          <Testimonial />
        </div>
        <Titel subtitel="CONTACT US" titel="Get In Touch" />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};
export default App;
