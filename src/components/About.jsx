import { useRef, useEffect } from 'react';

import { BsGithub } from 'react-icons/bs';
import { FaGitAlt, FaReact, FaSass, FaAws } from 'react-icons/fa';
import {
  SiMysql,
  SiNestjs,
  SiDjango,
  SiPython,
  SiDocker,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si';
import { DiRedis, DiMongodb, DiNodejs } from 'react-icons/di';
import { gsap } from 'gsap';

function About() {
  const iconSize = 60;
  const elRef = useRef(null);

  useEffect(() => {
    gsap.from(elRef.current, {
      opacity: 0,
      duration: 2,
      x: -100,
      scrollTrigger: {
        trigger: elRef.current,
        start: 'top 25%',
      },
    });

    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach((item, index) => {
      const tooltip_text = document.createElement('span');
      tooltip_text.classList.add('tooltip-text');
      // console.log(item.children[0].id)
      tooltip_text.appendChild(document.createTextNode(item.children[0].id));

      item.appendChild(tooltip_text);
    });
  }, []);

  return (
    <section id="about" className="about" ref={elRef}>
      <div className="container">
        <div className="section-title">
          <span>About me</span>
        </div>
        <div className="summary flex">
          {/* <div className="img-wrapper">
            <img src={require('../imgs/headshot2.png')} alt="Denzel's headshot" />
          </div> */}
          <summary>
            <p>
              Hello, I'm Denzel, an experienced developer based in{' '}
              <i>Vancouver, Canada</i>, specializing in
              <span className="bold"> Full-Stack</span> and{' '}
              <span className="bold">Backend development</span>. My expertise
              lies in crafting user-friendly web applications with elegant
              front-end interfaces and robust back-end{' '}
              <span className="bold"> infrastructures</span>. I'm dedicated to
              staying current with the latest technologies, ensuring secure,
              scalable, and maintainable solutions for your projects. Whether
              you need a <span className="bold">complex</span> web application
              or a <span className="bold">scalable</span> backend system, I'm
              here to bring your development goals to life.
            </p>
            <div className="skills">
              <div className="item bolden">
                <span>Frontend</span>
                <div className="flex skill-icons">
                  <div className="tooltip">
                    {<FaReact size={iconSize} id="React" />}
                  </div>
                  <div className="tooltip">
                    {<SiJavascript size={iconSize} id="JavaScript" />}
                  </div>
                  <div className="tooltip">
                    {<SiHtml5 size={iconSize} id="HTML5" />}
                  </div>
                  <div className="tooltip">
                    {<SiCss3 size={iconSize} id="CSS3" />}
                  </div>
                  <div className="tooltip">
                    {<SiNextdotjs size={iconSize} id="Next.js" />}
                  </div>
                </div>
              </div>
              <div className="item bolden">
                <span>Backend</span>
                <div className="flex skill-icons">
                  <div className="tooltip">
                    {<FaAws size={iconSize} id="AWS" />}
                  </div>
                  <div className="tooltip">
                    {<SiJavascript size={iconSize} id="JavaScript" />}
                  </div>
                  <div className="tooltip">
                    {<DiMongodb size={iconSize} id="MongoDB" />}
                  </div>
                  <div className="tooltip">
                    {<DiNodejs size={iconSize} id="Node.js" />}
                  </div>
                  <div className="tooltip">
                    {<SiDjango size={iconSize} id="Django" />}
                  </div>
                  <div className="tooltip">
                    {<SiPython size={iconSize} id="Python" />}
                  </div>
                  <div className="tooltip">
                    {<SiNestjs size={iconSize} id="Nest.js" />}
                  </div>
                </div>
              </div>
              <div className="item bolden">
                <span>Other</span>
                <div className="flex skill-icons">
                  <div className="tooltip">
                    {<BsGithub size={iconSize} id="GitHub" />}
                  </div>
                  <div className="tooltip">
                    {<FaGitAlt size={iconSize} id="Git" />}
                  </div>
                  <div className="tooltip">
                    {<SiMysql size={iconSize} id="MySQL" />}
                  </div>
                  <div className="tooltip">
                    {<SiDjango size={iconSize} id="Django" />}
                  </div>
                  <div className="tooltip">
                    {<SiDocker size={iconSize} id="Docker" />}
                  </div>
                  <div className="tooltip">
                    {<DiRedis size={iconSize} id="Redis" />}
                  </div>
                  <div className="tooltip">
                    {<FaSass size={iconSize} id="Sass" />}
                  </div>
                </div>
              </div>
            </div>
          </summary>
        </div>
      </div>
    </section>
  );
}

export default About;
