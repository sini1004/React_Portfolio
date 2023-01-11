import React from 'react'
import { Link } from 'react-router-dom'
import './HomeImg.scss'
import IntroImg from '../assets/professional-programmer-working-late-dark-office.jpg'

const HomeImg = () => {
  return (
    <div className='Intro'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A PARK SHINHEE.</p>
        <h1>Front-End Developer</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-lignt'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeImg