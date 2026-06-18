import React from "react";
import "./About.css";
import playIcon from "../../assets/play-icon.png";
import aboutImg from "../../assets/university.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
        <img src={playIcon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          A university is an institution of higher learning where students
          pursue advanced education, research, and professional training.
        </p>
        <p>
          It offers a wide range of academic programs across discip ines such as
          science, arts, commerce, engineering, medicine, and law.
        </p>
        <p>
          Universities not only provide knowledge but also encourage critical
          thinking, creativity, and innovation, preparing students for careers
          and lifelong learning
        </p>
      </div>
    </div>
  );
};

export default About;
