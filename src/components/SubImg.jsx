import React, { Component } from 'react'
import './SubImg.scss'
import Wave from 'react-wavify'
import Confetti from './Confetti'
// import SubWave from './SubWave'

class SubImg extends Component {
  render() {
    return (
      <>
      <div className='sub-img'>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      <Wave className='wave'
            fill='#141b23'
            paused={false}
            options={{
              height: 50,
              amplitude: 40,
              speed: 0.2,
              points: 5
            }}
        />
      <Confetti className='confetti'/>
      </div>
      
      </>
    )
  }
}

export default SubImg