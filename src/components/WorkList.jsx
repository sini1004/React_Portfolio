import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardData from './ProjectCardData'

const WorkList = () => {
  return (
    <div className='projects'>
      <h1 className='project-heading'>Works</h1>
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
              view={val.view}
              code={val.code}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WorkList