import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import chatgpt from '../../assets/chatgpt.png'
import linkedIn from '../../assets/linkedin.png'



function Projects() {
  return (
    <div id='projects'>
      <h2>1+ YEARS EXPERIENCE IN PROJECTS</h2>
      <div className="slider">
        <a href='https://linkedin-frontend-6grn.onrender.com' target='blank' rel='noopener noreferrer'><Card title="LINKEDIN" img={linkedIn} id="linkedin" /></a>
        <a href='https://gemini-5z3p.onrender.com' target='blank' rel='noopener noreferrer'><Card title="CHATGPT" img={chatgpt} id="chatgpt" /></a>
      </div>
    </div>
  )
}

export default Projects
