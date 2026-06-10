import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import programs from "../Programs/Programs";
import "./Navbar.css";
import EngiImage from "../../assets/Edusity.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-bar" : ""}`}>
      <img src={EngiImage} alt="student" className="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#programs">Program</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#campus">Campus view</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">
            <button className="btn">Contact us</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
