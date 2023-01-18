import React from 'react'
import WorkCard from './WorkCard'
import './WorkCard.scss'
import WorkCardData from './WorkCardData'

const WorkList = () => {
  return (
    <div className='work'>
      <h1 className='work-heading'>Works</h1>
      <div className="work-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard 
              key={index}
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

export default WorkList