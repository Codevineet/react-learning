import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 h-[87vh] flex gap-10'>
        <LeftText/>
        <RightText contentData = {props.contentData}/>
    </div>

  )
}

export default Page1Content