import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Home() {
  
  useGSAP(()=>{
    let tl1=gsap.timeline()
    tl1.from('.homedetails',{
      x:-150,
      duration:1,
      opacity:0
    })

    tl1.from('img',{
      x:200,
      duration:1,
      opacity:0
    })
  })
  
  return (
    <div id='home'>
      <div className="left-home">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">PRITISH RAJ</div>
          <div className="line3">
            <Typewriter
              words={['WEB DEVELOPER', 'SOFTWARE DEVELOPER', 'EDITOR']}
              loop={0 | false}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="right-home">
        <img src={man} alt="img" />
      </div>
    </div>
  )
}

export default Home
