import React from 'react'
import Navbar from '../components/Navbar'
import SubImg from '../components/SubImg'
import WorkList from '../components/WorkList'
import Footer from '../components/Footer'

export const Work = () => {
  return (
    <div>
      <Navbar />
      <SubImg heading='WORKS' text='퍼블리셔로 재직 시 제작한 사이트 모음'/>
      <WorkList />
      <Footer />
    </div>
  )
}

export default Work