import React from 'react'
import './ProjectCard.scss'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <h2 className="pro-title">{props.title}</h2>
      <div className="pro-details">
        <p>dd : {props.text}</p>
        <p>사용 기술 : {props.skill}</p>
        <div className='pro-details-comm'>{props.comment}</div>
        <div className="pro-btns">
          <NavLink to={props.site} className='btn'>site</NavLink>
          <NavLink to={props.code} className='btn'>code</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard