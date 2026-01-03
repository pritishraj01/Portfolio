import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import java from '../../assets/java.png'
import js from '../../assets/js.png'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(() => {
    gsap.from('.circle', {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.circle',
        scroller: 'body',
        scrub: 2,
        start: "top 50%",
        end: "top 10%"
      }
    })
    gsap.from('.line', {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.line',
        scroller: 'body',
        scrub: 2,
        start: "top 50%",
        end: "top 20%"
      }
    })
  })

  return (
    <div id='about'>
      <div className="left-about">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="about-details">
          <div className="personal-info">
            <h1>PERSONAL INFO</h1>
            <ul>
              <li><span>NAME:</span> PRITISH</li>
              <li><span>AGE:</span> 19</li>
              <li><span>GENDER:</span> MALE</li>
              <li><span>LANGUAGE KNOWN:</span> HINDI, ENGLISH</li>
            </ul>
          </div>
          <div className="education">
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE:</span> BTECH</li>
              <li><span>BRANCH:</span> ETC</li>
              <li><span>CGPA:</span> 8</li>
            </ul>
          </div>
          <div className="skills">
            <h1>SKILLS</h1>
            <ul>
              <li>MERN STACK WEB DEV</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-about">
        <Card title="MERN STACK DEVELOPER" img={mern} id='mern' />
        <Card title="DSA" img={dsa} />
        <Card title="JAVASCRIPT" img={js} />
      </div>
    </div>
  )
}

export default About
