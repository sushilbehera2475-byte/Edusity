import React from "react";
import "./Contact.css";
import Login from "./Login";
import message from "../../assets/message-ico.webp";
import email from "../../assets/email-icon.webp";
import phone from "../../assets/phone-icon.webp";
import location from "../../assets/location-icon.webp";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          send us a message
          <img src={message} alt="" />
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          voluptate.
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            sushil210@gmail.com
          </li>
          <li>
            <img src={phone} alt="" />
            +91 6372749567
          </li>
          <li>
            <img src={location} alt="" />
            143, Badaraghunathpur, Bhubaneswer, India
          </li>
        </ul>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default Contact;
