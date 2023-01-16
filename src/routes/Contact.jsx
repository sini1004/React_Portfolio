import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubImg from '../components/SubImg'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <SubImg heading='CONTACT' text='궁금한 사항은 이 곳으로 연락주세요.'/>
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Contact