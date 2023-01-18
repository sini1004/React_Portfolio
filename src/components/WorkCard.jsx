import React from 'react'
import './WorkCard.scss'

const WorkCard = (props) => {
  return (
    <div className="work-card">
      <h2 className="work-title">{props.title}</h2>
      <span className="bar"></span>
      <div className="work-details">
        <p>{props.text}</p>
        <div className='work-details-comm'>{props.comment}</div>
        <div className="work-btns">
          <a href={props.site} target="_blank" className='btn'>site</a>
          <a href={props.site} target="_blank" className='btn'>site</a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
