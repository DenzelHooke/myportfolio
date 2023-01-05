import { useEffect } from "react";

import logo from "./logo.svg";
import "./App.scss";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    //Runs on start

    //Pull top of window to start of page
    gsap.to(window, { duration: 0, scrollTo: { y: 0 } });

    //! stick in about componenet

    //Gets all project elements
    const projects = gsap.utils.toArray(".project");

    //Set animation on all project elements

    projects.forEach((project, index) => {
      const topTrigger = "top 60%";
      const dur = 2.2;

      // For every second element, switch up the animation direction.
      if ((index + 1) % 2 === 0) {
        console.log("odd");
        gsap.from(project, {
          opacity: 0,
          duration: dur,
          x: -100,
          scrollTrigger: {
            trigger: project,
            start: topTrigger,
          },
        });
      } else {
        console.log("even");
        gsap.from(project, {
          opacity: 0,
          duration: dur,
          x: 100,
          scrollTrigger: {
            trigger: project,
            start: topTrigger,
          },
        });
      }
    });
  }, []);

  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
