import { useEffect } from 'react';

import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {

    //Runs on start
    gsap.from('.about', { opacity: 0, duration: 2 , x: -100, scrollTrigger: {
      trigger: '.about',
      start: 'top 50%',
    }})

    //Gets all project elements
    const projects = gsap.utils.toArray('.project');
    
    //Set animation on all project elements

    projects.forEach((project, index) => {
      const topTrigger = 'top 60%';
      const dur = 1;

      if((index+1) % 2 === 0) {
        console.log('odd')
        gsap.from(project, { opacity: 0, duration: dur, x: -100,
          scrollTrigger: {
            trigger: project,
            start: topTrigger}
          })
      } else {
        console.log('even')
        gsap.from(project, { opacity: 0, duration: dur, x: 100, 
          scrollTrigger: {
            trigger: project,
            start: topTrigger}
          })
      }
    })

  }, [])

  return (
    <>
      <Intro />
      <About />
      <Projects />
    </>
  );
}

export default App;
