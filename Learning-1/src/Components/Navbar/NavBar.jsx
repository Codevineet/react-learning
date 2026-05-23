import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Services</a>
    </div>
  )
}

export default NavBar;