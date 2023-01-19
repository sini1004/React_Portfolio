import React, { useEffect } from 'react'
import './AboutContent.scss'
import profile from '../assets/sini.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutContent = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <>
    <div className='about'>
      <div className="left">
        <div className="img-container">
          <div className="img-stack top">
            <img src={profile} alt="profile" className='img'/>
          </div>
          <div className="img-stack bottom">
            <img src={profile} alt="profile" className='img'/>
          </div>
        </div>
      </div>
      <div className="right">
        <h1 data-aos='fade-left'>Who Am I?</h1>
        <p data-aos='fade-left' data-aos-delay="500">
          안녕하세요! 4년차 웹 퍼블리셔 박신희입니다.<br />
          쉽고 깔끔한 코드를 표현하는 걸 좋아합니다.<br /><br />

          탄탄한 코드와 유지보수를 위한 컴포넌트 단위의 마크업에 관심이 많습니다.<br /><br />

          사용자의 입장에서 한번 더 생각하고 더 나은 방향을 위해 고민합니다.<br /><br />

          브라우저 위에 그려지는것들이 재미있고 완성된 작업물을 보는 것이 뿌듯합니다.<br /><br />

          차후 프론트엔드로 전향하는 것이 현재 저의 목표입니다.<br />
          목표를 위해 하루하루 꾸준함을 잃지 않으려 노력합니다.<br />
        </p>
      </div>
    </div>
    <div className="about-introduce">
      <ul>
        <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="100">
          <h4>Learn</h4>
          <p>Html, CSS, Javascript를 배웠지만 부족함을 느껴 스터디를 통해 리액트, 뷰 등을 배우며 적극적으로 개발에 대한 역량을 키우고 있습니다.</p>
        </li>
        <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500">
          <h4>Steadily</h4>
          <p>웹디자인을 하며 웹에 대한 호기심이 생겼고 지금은 웹에 대해 공부하며 조금은 느리지만 꾸준하게 성장하고 있다고 생각합니다.</p>
        </li>
        <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="700">
          <h4>Effort</h4>
          <p>어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 노력하겠습니다.</p>
        </li>
        <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="900">
          <h4>Passion</h4>
          <p>밝은 에너지로 동료들과 협동하며 매력적인 코딩, 깔끔한 동적 구현을 해내고 마는 퍼블리셔&프론트엔드 개발자가 되겠습니다.</p>
        </li>
      </ul>
    </div>
    </>
    
  )
}

export default AboutContent