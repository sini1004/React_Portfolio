import React from 'react'
import './Footer.scss'
import { FaBirthdayCake, FaMailBulk } from 'react-icons/fa'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="birth">
            <FaBirthdayCake /> <p>1993.04.01</p>
          </div>
          <div className="phone">
            <BsFillTelephonePlusFill /> <p>010.9118.9855</p>
          </div>
          <div className="email">
            <FaMailBulk /> <p>p_shinhee@naver.com</p>
          </div>
        </div>
        <div className="right">
          <h4>Please Note</h4>
          <p>
            Thank you for taking the time to watch.<br/>
            더 좋은 결과를 위해 계속 수정 중에 있습니다!
          </p>
          <div className='social'>
            <a href="https://github.com/sini1004"><AiFillGithub /></a>
            <a href="https://www.instagram.com/"><AiFillInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer