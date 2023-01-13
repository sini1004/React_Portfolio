import React from 'react'
import './ProjectCard.scss'
import pro1 from '../assets/react_lacoste.png'
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div className='projects'>
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="project" />
          <h2 className="pro-title">React lacoste</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
              <NavLink to='url.com' className='btn'>view</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard