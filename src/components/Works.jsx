import React from 'react'
import './Works.scss' 
import WorkList from './WorkList'

const Works = () => {
  return (
    <div className='works'>
      <WorkList />
      <div className="works-container">
        <div className="work">
          <h3>site1</h3>
          <span className='bar'></span>
          <p>오투요소수</p>
          <a href='http://www.o2urea.com/' className='btn' target='_blank' rel='noopener noreferrer'>view site</a>
        </div>
        <div className="work">
          <h3>site1</h3>
          <span className='bar'></span>
          <p>오투요소수</p>
          <a href='http://www.o2urea.com/' className='btn' target='_blank' rel='noopener noreferrer'></a>
        </div>
        <div className="work">
          <h3>site1</h3>
          <span className='bar'></span>
          <p>오투요소수</p>
          <a href='http://www.o2urea.com/' className='btn' target='_blank' rel='noopener noreferrer'></a>
        </div>
      </div>
    </div>
  )
}

export default Works