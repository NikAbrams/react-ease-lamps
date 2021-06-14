import React from 'react'

// Styles
import styles from './Burger.module.scss'

const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={styles.burgerWrapper}>
      <div
        className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={styles.burgerLines}></div>
      </div>
    </div>
  )
}

export default Burger
