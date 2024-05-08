import React from 'react'
import Home from '../Home/Home'
import "./rightSide.css"
import About from '../About/About'
import Skills from '../Skills/Skills'

const RightComponent = () => {
  return (
    <div className='rightSide'>

        <div className='allContent'>

            <Home/>
            <About/>
            <Skills/>

        </div>
      
    </div>
  )
}

export default RightComponent
