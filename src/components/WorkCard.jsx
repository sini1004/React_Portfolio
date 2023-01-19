import React from 'react'
import './WorkCard.scss'

const WorkCard = (props) => {
  return (
    <div className="work-card">
      <span></span>
        <span></span>
        <span></span>
        <span></span>
      <h2 className="work-title">{props.title}</h2>
      <p className="bar"></p>
      <div className="work-details">
        <p className='work-text'>{props.text}</p>
        <p>기여도 : {props.contri}</p>
        <div className='work-details-comm'>{props.comment}</div>
        <div className="work-btns">
          <a href={props.site} target="_blank" className='btn'>site</a>
          {/* <a href={props.site} target="_blank" className='btn'>site</a> */}
        </div>
      </div>
    </div>
  )
}

export default WorkCard
