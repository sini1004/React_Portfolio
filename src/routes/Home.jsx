import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../components/HomeImg'
import WorkList from '../components/WorkList'
import ProjectList from '../components/ProjectList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeImg />
      <WorkList />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default Home