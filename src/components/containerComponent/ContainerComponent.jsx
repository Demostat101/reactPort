
import React from 'react'
import TopBar from '../TopBar/TopBar'
import "./ContainerComponent.css"
import MainComponent from '../Main/MainComponent'


const ContainerComponent = () => {

  return (
    <div className='container'>

        <TopBar/>
        <MainComponent/>
      
    </div>
  )
}

export default ContainerComponent
