import React, { useEffect } from 'react'
import './ProjectCard.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectCard = (props) => {
  useEffect(()=>{
    AOS.init({duration:3000});
  },[])
  return (
    <div className="project-card" data-aos='fade-up'>
      <img src={props.imgsrc} alt="project" />
      <h2 className="pro-title">{props.title}</h2>
      <div className="pro-details">
        <p>dd : {props.text}</p>
        <p>사용 기술 : {props.skill}</p>
        <div className='pro-details-comm'>{props.comment}</div>
        <div className="pro-btns">
          <a href={props.site} target="_blank" className='btn'>site</a>
          <a href={props.code} target="_blank" className='btn'>code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard