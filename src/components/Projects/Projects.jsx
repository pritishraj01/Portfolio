import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import weather from '../../assets/weather.png'
import chatgpt from '../../assets/chatgpt.png'
import blinky from '../../assets/blinky.png'
import dic from '../../assets/dic.png'
import game from '../../assets/game.png'
import to from '../../assets/todo.png'


function Projects() {
  return (
    <div id='projects'>
      <h2>2+ YEARS EXPERIENCE IN PROJECTS</h2>
      <div className="slider">
        <a href='http://mychatgptai.netlify.app' target='blank' rel='noopener noreferrer'><Card title="CHATGPT" img={chatgpt} id="chatgpt" /></a>
        <a href='https://linkedin-frontend-6grn.onrender.com' target='blank' rel='noopener noreferrer'><Card title="WEATHER CONDITION" img={weather} id="weather" /></a>
      </div>
    </div>
  )
}

export default Projects
