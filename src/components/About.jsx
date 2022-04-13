import React from 'react'

import { FaReact }  from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { BsGithub } from 'react-icons/bs'
import { FaGitAlt } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'

function About() {
  const iconSize = 60;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title"><span>About me</span></div>
        <div className="summary flex">
          <div className="img-wrapper">
            <img src={require('../imgs/cutout-head.png')} alt="Denzel's headshot" />
          </div>
          <summary>
            <p>Hello, I’m Denzel and I’m a self-taught developer in lower mainland British Columbia, Canada. All areas of programming interest me with full-stack web development having the most of my interest.</p>
            <div className="skills">
              <div className="item bolden">
                <span>Frontend</span>
                <div className="flex skill-icons">
                  {<FaReact size={iconSize}/>}
                  {<SiJavascript size={iconSize}/>}
                  {<SiHtml5 size={iconSize}/>}
                  {<SiCss3 size={iconSize}/>}
                </div>
              </div>
              <div className="item bolden">
                <span>Backend</span>
                <div className="flex skill-icons">
                  {<SiJavascript size={iconSize}/>}
                  {<SiPython size={iconSize}/>}
                  {<DiNodejs size={iconSize}/>}
                </div>
              </div>
              <div className="item bolden">
                <span>Other</span>
                <div className="flex skill-icons">
                  {<BsGithub size={iconSize}/>}
                  {<FaGitAlt size={iconSize}/>}
                  {<SiMysql size={iconSize}/>}
                  {<SiDjango size={iconSize}/>}
                </div>
              </div>
            </div>
          </summary>
        </div>
      </div>
    </section>
  )
}

export default About