import React from 'react'
import Home from '../Home/Home'
import "./rightSide.css"
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact.jsx/Contact'

const RightComponent = () => {
  return (
    <div className='rightSide'>

        <div className='allContent'>

            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>

        </div>
      
    </div>
  )
}

export default RightComponent
