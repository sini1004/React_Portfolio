import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubImg from '../components/SubImg'
import Works from '../components/Works'
import ProjectCard from '../components/ProjectCard'
import ProjectList from '../components/ProjectList'

const Project = () => {
  return (
    <div>
      <Navbar />
      <SubImg heading='PROJECTS' text='프로젝트 모음 페이지입니다.'/>
      <ProjectList />
      <Works />
      <Footer />
    </div>
  )
}

export default Project