import React from 'react'
import './ProjectCard.scss'
import ProjectCard from './ProjectCard'
import ProjectCardData from './ProjectCardData'

const ProjectList = () => {
  return (
    <div className='projects'>
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, index) => {
          return (
            <ProjectCard 
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              skill={val.skill}
              comment={val.comment}
              site={val.site}
              code={val.code}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectList