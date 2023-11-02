import { useEffect, useRef, componentDidMount } from 'react';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Intro() {
  let introText = useRef(null);

  useEffect(() => {
    // console.log(introText);
    gsap.from(introText.current, { opacity: 0, duration: 3, y: -20 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="intro">
        <div ref={introText} className="inner container flex">
          <p className="largeText">
            Hello, I'm <span>Denzel</span>
            <br className="intro-br" /> and I create.
          </p>
        </div>
      </section>
    </>
  );
}

export default Intro;
