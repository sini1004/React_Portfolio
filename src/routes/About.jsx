import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubImg from '../components/SubImg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <SubImg heading='ABOUT' text='저에 대해 알려드릴께요!'/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About