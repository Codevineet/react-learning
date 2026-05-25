import React from 'react'
import NavBar from './NavBar.jsx'
import Page1Content from './Page1Content.jsx'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <NavBar/>
        <Page1Content contentData = {props.contentData}/>
    </div>
   
  )
}

export default Section1