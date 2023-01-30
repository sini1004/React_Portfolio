import React from 'react'
import './Career.scss'
import { BsCheck } from 'react-icons/bs'

const Career = () => {
  return (
    <>
      <div id="career">
        <h5>Here is my career list</h5>
        <h2>Career</h2>
        <div className="career-container">
          <article className="career">
            <div className="career-head">
              <h3>위넌(퍼블리셔)</h3>
              <p>(2019.5 - 2022.5)</p>
            </div>
            <ul className='career-list'>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>홈페이지 제작(그누보드 기반)</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>그누보드 게시판 커스터마이징</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>cafe24 쇼핑몰 디자인 및 수정</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>블로그스킨 디자인 및 구축</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>블로그 배너/썸네일 제작</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>인스타 이미지 제작</p>
              </li>
            </ul>
          </article>
          <article className="career">
            <div className="career-head">
              <h3>웹스틴(퍼블리셔)</h3>
              <p>(2018.7 - 2019.2)</p>
            </div>
            <ul className='career-list'>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>홈페이지 제작(그누보드 기반)</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>홈페이지 디자인</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>그누보드 게시판 커스터마이징</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>블로그 배너/썸네일 제작</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>인스타 이미지 제작</p>
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
                <p>쇼핑몰 관리</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>상세페이지 제작</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>제품 촬영</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>제품이미지보정</p>
              </li>
              <li>
                <BsCheck className='career-list-icon'/>
                <p>쇼핑몰 커스터마이징</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  )
}

export default Career