import React from 'react'
import styles from './DisplayCard.module.css';

const DisplayCard = ({ details }) => {

    return (
        <div className={styles.cardContainer}>
            {details.map((user, index) => {
                return (
                    <div className={styles.card} key={index}>
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