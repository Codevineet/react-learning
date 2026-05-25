import React from 'react'
import ImageContainer from './ImageContainer'

const RightText = (props) => {
  return (
    <div  id="right" className='h-full w-[70%] p-5 flex gap-10 overflow-x-auto'>
        {props.contentData.map((content, index) =>{
          return <ImageContainer content = {content} key={index} id={index}/>
        })}

    </div>
  )
}

export default RightText