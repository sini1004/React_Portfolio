import React from 'react'
import './Experience.scss'
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <>
      <div id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="experience-container">
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="container-content">
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Vue</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience-design">
          <h3>Design Tools</h3>
            <div className="container-content">
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Adobe Photoshop</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Adobe Illustrator</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Adobe XD</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Figma</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='container-details'>
                <BsPatchCheckFill />
                <div>
                  <h4>Sketch</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
