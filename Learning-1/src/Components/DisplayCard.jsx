import React from 'react'
import './DisplayCard.css'

const DisplayCard = ({ details }) => {

    return (
        <div className='card-container'>
            {details.map((user, index) => {
                return (
                    <div className='card' key={index}>
                        <img src={user.image} alt={user.userName} />
                        <h1>{user.userName}</h1>
                        <p>{user.userDesc}</p>
                        <button>View Profile</button>
                    </div>
                )
            })}

            </div>
    )
}

export default DisplayCard;