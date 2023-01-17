import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../components/HomeImg'
import ProjectList from '../components/ProjectList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeImg />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default Home