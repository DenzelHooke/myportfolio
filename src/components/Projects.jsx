import React from "react";

import { BsGithub } from "react-icons/bs";

function Projects() {
  const projects = [
    {
      title: "Base Manufacturing",
      summary:
        "Base Manufacturing is the premier choice for foundational materials and sturdy building solutions.",
      technologies: "Next.js Sanity.io AWS",
      image: "basemfg.png",
      alt: "Base manufacturing webpage screenshot",
      github: "https://github.com/DenzelHooke/base_manufacturing",
      live: "https://www.basemfg.ca/",
      svg: <BsGithub size={50} />,
    },
    {
      title: "Job Tracker",
      summary:
        "Job Tracker streamlines your job application process, helping you stay organized and efficient in your job search journey.",
      technologies: "Next.js Nest.js AWS",
      image: "jobfile.png",
      alt: "job tracker webpage screenshot",
      github: "https://github.com/DenzelHooke/jobfile",
      live: "https://job-file.vercel.app/",
      svg: <BsGithub size={50} />,
    },
    // {
    //   title: 'Plastico',
    //   summary:
    //     "Plastico revolutionizes hydration with the world's first 100% recyclable water bottle, combating plastic waste for a greener future. Embrace responsible consumption and make a positive impact with Plastico.",
    //   technologies: 'Next.js JavaScript GSAP',
    //   image: 'plastico.png',
    //   alt: 'plastico webpage screenshot',
    //   github: 'https://github.com/DenzelHooke/plastico',
    //   live: 'https://plastico-denzelhooke.vercel.app/ ',
    //   svg: <BsGithub size={50} />,
    // },
    // {
    //   title: 'Coast Lumber',
    //   summary:
    //     'An exciting and forward thinking mock lumber plant that cares about the environment whilst also giving back to the community. Built on Next.js, Framer motion and React.js.',
    //   technologies: 'React  JavaScript  Next.js',
    //   image: 'coast-lumber.jpg',
    //   alt: 'coast lumber webpage screenshot',
    //   github: 'https://github.com/DenzelHooke/coast-lumber',
    //   live: 'https://coast-lumber.vercel.app/',
    //   svg: <BsGithub size={50} />,
    // },
    // {
    //   title: 'VideoChattr',
    //   summary:
    //     'A lightweight and intuitive video calling platform built on NextJS, Express, and Socket.io. Features an extensive backend API for data management.',
    //   technologies:
    //     'React  JavaScript  Node.js  Express  Redux-Toolkit  Socket.io MongoDB',
    //   image: 'video-chattr.png',
    //   alt: 'video chat application screenshot',
    //   github: 'https://github.com/DenzelHooke/videoChattrr',
    //   live: 'https://video-chattr-denzelhooke.vercel.app/',
    //   svg: <BsGithub size={50} />,
    // },
    // {
    //   title: 'ChattrBox',
    //   summary:
    //     'A full-stack web application where users can chat amongst themselves in chat rooms built on React, Express and Redux.',
    //   technologies:
    //     'React  JavaScript  Node.js  Express  Redux-Toolkit  Socket.io',
    //   image: 'chattr.png',
    //   alt: 'chat application screenshot',
    //   github: 'https://github.com/DenzelHooke/ChattrrBox',
    //   // live: "https://chattrrbox.herokuapp.com/",
    //   svg: <BsGithub size={50} />,
    // },
    // {
    //   title: 'Weather-mee',
    //   summary:
    //     'A weather application built with React and Express powered by the OpenWeatherAPI.',
    //   technologies: 'React  JavaScript  Node.js  Express',
    //   image: 'weather3.png',
    //   alt: 'Weather-me screenshot',
    //   github: 'https://github.com/DenzelHooke/Weather-mee',
    //   live: 'https://weather-mee.netlify.app/',
    //   svg: <BsGithub size={50} />,
    // },
    // {
    //   title: 'Password Manager',
    //   summary:
    //     'A simple and intuitive password manager built on Python and SQLite.',
    //   technologies: 'Python  SQLite.',
    //   image: 'passManager.png',
    //   alt: 'Password Manager screenshot',
    //   github: 'https://github.com/DenzelHooke/Password-Manager',
    //   live: null,
    //   svg: <BsGithub size={50} />,
    // },
    {
      title: "denzelhooke.com",
      summary:
        "A sleek and clean portfolio website showcasing my various projects.",
      technologies: "React  JavaScript",
      image: "portfolio.png",
      alt: "Portfolio website screenshot",
      github: "https://github.com/DenzelHooke/myportfolio",
      live: "http://denzelhooke.com",
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
