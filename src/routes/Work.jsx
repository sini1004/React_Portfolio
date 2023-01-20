import React from 'react'
import Navbar from '../components/Navbar'
import SubImg from '../components/SubImg'
import WorkList from '../components/WorkList'
import Footer from '../components/Footer'

export const Work = () => {
  return (
    <div>
      <Navbar />
      <SubImg heading='WORKS' text='제작하여 배포한 사이트 모음입니다.'/>
      <WorkList />
      <Footer />
    </div>
  )
}

export default Work