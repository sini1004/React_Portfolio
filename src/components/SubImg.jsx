import React, { Component } from 'react'
import './SubImg.scss'

class SubImg extends Component {
  render() {
    return (
      <div className='sub-img'>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default SubImg