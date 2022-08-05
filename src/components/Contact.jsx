import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-title">
          <span>Contact</span>
        </div>
        <p>
          I'm currently looking for new opportunitites. Please don't hesitate to
          reach out, my inbox is always open.
        </p>
        <a href="mailto:denzelhooke-work@hotmail.com" className="email">
          Email me
        </a>
        <div className="email_text">
          <span className="light-text"></span>
          <p className="light-text">denzelhooke-work@outlook.com</p>
        </div>
        <ul className="social-links">
          <li>
            <a href="https://github.com/denzelhooke" target="_blank">
              <BsGithub size={45} />
            </a>
          </li>
          <li>
            <a href="https://ca.linkedin.com/in/denzelhooke" target="_blank">
              <BsLinkedin size={45} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
