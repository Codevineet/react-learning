import React from 'react'
import { CornerDownRight } from 'lucide-react'

const LeftText = () => {
    return (
        <div className='h-full w-[25%]'>

            <h1 className='text-5xl font-bold mb-8 leading-[1.1] mt-5'>
                Prospective  Customer Segmentation
            </h1>

            <h5 className='text-gray-600 font-medium mb-10'>
                Depending on customer satisfaction and access to banking products,
                potential target audience can be divided into three groups
            </h5>

            <div className='py-25 text-9xl'>
                <CornerDownRight size={75}/>
            </div>

        </div>
    )
}

export default LeftText