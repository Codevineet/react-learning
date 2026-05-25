import React from 'react'

const ImageContainer = (props) => {

    let {content, id} = props;
    console.log(props);
    return (
        <div className='h-full bg-amber-600 flex w-80 rounded-4xl overflow-hidden relative shrink-0'>

            <img
                className='object-cover w-full h-full'
                src={content.contentUrl}
                alt=""
            />

            {/* Black Overlay */}
            <div className='absolute top-0 left-0 h-full w-full bg-black/30'></div>

            {/* Content */}
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>

                <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center text-2xl font-bold'>
                    {id+1}
                </h2>

                <div>
                    <p className='text-lg leading-relaxed text-white mb-15 '>
                        {content.mainline}
                    </p>

                    <button className='px-7 py-3 rounded-2xl bg-blue-600 font-bold text-white'>
                        {content.buttonText}
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ImageContainer