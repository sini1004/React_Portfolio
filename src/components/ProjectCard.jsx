import React from 'react'
import './ProjectCard.scss'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <h2 className="pro-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className='btn'>view site</NavLink>
          <NavLink to={props.code} className='btn'>view code</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard