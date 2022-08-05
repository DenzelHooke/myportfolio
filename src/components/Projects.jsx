import React from "react";

import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "ChattrBox",
      summary:
        "A full-stack web application where users can chat amongst themselves in chat rooms built on React, Express and Redux-Toolkit.",
      technologies: "React JavaScript Node.js Express Redux-Toolkit Socket.io",
      image: "chattr.png",
      alt: "chat application screenshot",
      github: "https://github.com/DenzelHooke/ChattrrBox",
      live: "https://chattrrbox.herokuapp.com/",
      svg: <BsGithub size={50} />,
    },
    {
      title: "Weather-mee",
      summary:
        "A weather application built with React and Express powered by the OpenWeatherAPI",
      technologies: "React JavaScript Node.js Express",
      image: "weather3.png",
      alt: "Weather-me screenshot",
      github: "https://github.com/DenzelHooke/Weather-mee",
      live: "https://weather-mee.netlify.app/",
      svg: <BsGithub size={50} />,
    },
    {
      title: "Password Manager",
      summary:
        "A simple and intuitive password manager built on Python and SQLite.",
      technologies: "Python SQLite",
      image: "passManager.png",
      alt: "Password Manager screenshot",
      github: "https://github.com/DenzelHooke/Password-Manager",
      live: null,
      svg: <BsGithub size={50} />,
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="section-title">
          <span>Featured Projects</span>
        </div>
        {projects.map((project) => {
          return (
            <div className="project project-odd">
              <div className="wrapper">
                <div className="basic-info">
                  <p>{project.title}</p>
                  <summary className="project-summary project-card shadow">
                    <p>{project.summary}</p>
                  </summary>
                  <div className="project-tech">
                    <span>Technologies Used</span>
                    <p>{project.technologies}</p>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src={require(`../imgs/${project.image}`)}
                    alt={`${project.alt}`}
                    className="project-img shadow"
                  />
                </div>
              </div>
              <div className="links">
                <div className="spacer"></div>
                <ul>
                  <li>
                    {project.live && (
                      <a href={project.live} className="live" target="_blank">
                        VIEW
                      </a>
                    )}
                  </li>
                  <li>
                    <a href={project.github} className="github" target="_blank">
                      {project.svg}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
