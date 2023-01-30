import React from 'react'
import './Career.scss'
import { BsCheck } from 'react-icons/bs'

const Career = () => {
  return (
    <>
      <div id="career">
        <h5></h5>
        <h2>Career</h2>
        <div className="career-container">
          <article className="career">
            <div className="career-head">
              <h3>위넌(웹퍼블리셔)</h3>
              <p>(2019.5 - 2022.5)</p>
            </div>
            <ul className='career-list'>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>웹사이트 제작</p>
                <p>인스타그램 이미지 제작</p>
                <p>인스타그램 이미지 제작</p>
              </li>
            </ul>
          </article>
          <article className="career">
            <div className="career-head">
              <h3>위넌(웹퍼블리셔)</h3>
              <p>(2019.5 - 2022.5)</p>
            </div>
            <ul className='career-list'>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>웹사이트 제작</p>
                <p>인스타그램 이미지 제작</p>
                <p>인스타그램 이미지 제작</p>
              </li>
            </ul>
          </article>
          <article className="career">
            <div className="career-head">
              <h3>비앤에스파트너(웹디자이너)</h3>
              <p>(2016.1 - 2017.1)</p>
            </div>
            <ul className='career-list'>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>웹사이트 제작</p>
                <p>제품 이미지 촬영</p>
                <p>제품 촬영본 보정</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  )
}

export default Career