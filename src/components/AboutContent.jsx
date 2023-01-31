import React, { useEffect } from 'react'
import './AboutContent.scss'
import profile from '../assets/shinhee.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineSparkles, HiOutlineEmojiHappy } from 'react-icons/hi'
import Experience from './Experience'
import Career from './Career'
import { Link } from 'react-router-dom'


const AboutContent = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <>
    <div className='about'>
      <h5 className='about-titile'>Get To Know</h5>
      <h1>About Me</h1>
      <div className="conatiner about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={profile} alt="about image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <HiOutlineAcademicCap className='about-ion'/>
              <h5>Learn</h5>
              <small>Html, CSS, Javascript를 배웠지만 부족함을 느껴 스터디를 통해 리액트, 뷰 등을 배우며 적극적으로 개발에 대한 역량을 키우고 있습니다.</small>
            </article>
            <article className='about-card'>
              <HiOutlineSparkles className='about-ion'/>
              <h5>Steadily</h5>
              <small>웹디자인을 하며 웹에 대한 호기심이 생겼고 지금은 웹에 대해 공부하며 조금은 느리지만 꾸준하게 성장하고 있다고 생각합니다.</small>
            </article>
            <article className='about-card'>
              <HiOutlineLightBulb className='about-ion'/>
              <h5>Effort</h5>
              <small>어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 노력하겠습니다.</small>
            </article>
            <article className='about-card'>
              <HiOutlineEmojiHappy className='about-ion'/>
              <h5>Passion</h5>
              <small>밝은 에너지로 동료들과 협동하며 매력적인 코딩, 깔끔한 동적 구현을 해내고 마는 퍼블리셔&프론트엔드 개발자가 되겠습니다.</small>
            </article>
          </div>
          <p>
            4년차 웹 퍼블리셔 박신희입니다.<br />
            탄탄한 코드와 유지보수를 위한 컴포넌트 단위의 마크업에 관심이 많습니다.<br />
            사용자의 입장에서 한번 더 생각하고 더 나은 방향을 위해 고민합니다.<br />
            브라우저 위에 그려지는것들이 재미있고 완성된 작업물을 보는 것이 뿌듯합니다.<br />
            차후 프론트엔드로 전향하는 것이 현재 저의 목표입니다.
          </p>
          <Link to='/contact' className='btn'>Go to</Link>
        </div>
      </div>
      <Experience />
      <Career />
    </div>
    </>
    
  )
}

export default AboutContent