import React from 'react'
import './WorkCard.scss'

const WorkCard = (props) => {
  return (
    <div className="work-card">
      <h2 className="work-title">{props.title}</h2>
      <span className="bar"></span>
      <div className="work-details">
        <p>안녀어어엉 : {props.text}</p>
        <p>사용 기술 : {props.skill}</p>
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
