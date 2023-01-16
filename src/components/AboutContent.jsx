import React from 'react'
import './AboutContent.scss'
import profile from '../assets/sini.png'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <div className="img-container">
          <div className="img-stack top">
            <img src={profile} alt="profile" className='img'/>
          </div>
          <div className="img-stack bottom">
            <img src={profile} alt="profile" className='img'/>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>Who Am I?</h1>
        <p>Im a react front-edn developer.</p>
      </div>
    </div>
  )
}

export default AboutContent