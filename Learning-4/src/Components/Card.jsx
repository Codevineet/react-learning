import React from 'react'

const Card = (props) => {

    let { heading, details, idx, deleteNote } = props;
    return (
        <div className='h-70 w-65 ounded-2xl px-8 py-7 text-black bg-[url("https://pics.clipartpng.com/Sticky_Note_PNG_Clipart-2366.png")] bg-cover flex justify-around flex-col'>
            <div>
                <h3 className='leading-tight text-xl font-bold'>{heading}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500 '>{details}</p>
                </div>

            <button className='px-2 py-2 bg-red-600 rounded' onClick={() => {
                deleteNote(idx)
            }}>Delete</button>
        </div>
    )
}

export default Card