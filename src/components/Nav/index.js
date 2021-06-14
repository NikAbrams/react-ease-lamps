import React from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import styles from './Nav.module.scss'

const navItems = [
  { path: '/', title: 'Главная' },
  // {path: '/collections', title: 'Коллекции'},
  { path: '/about', title: 'О нас' },
  { path: '/contacts', title: 'Контакты' },
]

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
      <ul className={styles.navList}>
        {navItems.map(({ path, title }) => (
          <li
            key={path}
            className={styles.navItem}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
