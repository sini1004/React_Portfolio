import React from 'react'
import './Footer.scss'
import { FaLink, FaMailBulk, FaPhone } from 'react-icons/fa'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaLink size={20} style={{color:"#fff"}} />
            <div>
              <p>https://github.com/sini1004</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff"}} />010.9118.9855</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff"}} />p_shinhee@naver.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>Please Note</h4>
          <p>
            Thank you for taking the time to watch.<br/>
            더 좋은 결과를 위해 계속 수정 중에 있습니다!
          </p>
          <div className='social'>
            <AiFillGithub />
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer