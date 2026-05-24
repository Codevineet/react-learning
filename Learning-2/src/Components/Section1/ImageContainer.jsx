import React from 'react'

const ImageContainer = () => {
    return (
        <div className='h-full bg-amber-600 flex w-80 rounded-4xl overflow-hidden relative'>

            <img
                className='object-cover w-full h-full'
                src="https://plus.unsplash.com/premium_photo-1674055047975-70b79b84d871?w=600&auto=format&fit=crop&q=60"
                alt=""
            />

            {/* Black Overlay */}
            <div className='absolute top-0 left-0 h-full w-full bg-black/30'></div>

            {/* Content */}
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>

                <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center text-2xl font-bold'>
                    1
                </h2>

                <div>
                    <p className='text-lg leading-normal text-white mb-10'>
                        Prime Customers, that have access to bank credit and are satisfied with the current product
                    </p>

                    <button className='px-7 py-3 rounded-2xl bg-blue-600 font-bold text-white'>
                        Satisfied
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ImageContainer