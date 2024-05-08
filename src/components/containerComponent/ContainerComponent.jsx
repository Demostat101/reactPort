
import React from 'react'
import TopBar from '../TopBar/TopBar'
import "./ContainerComponent.css"
import Main from '../Main/Main'

const ContainerComponent = () => {

  return (
    <div className='container'>

        <TopBar/>
        <Main/>
      
    </div>
  )
}

export default ContainerComponent
