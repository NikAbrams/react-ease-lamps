import React from 'react'
import { connect } from 'react-redux'
import { setMenuOpen } from '../../redux/reducers/menu'

// Styles
import styles from './Header.module.scss'

// Components
import Container from '../Container'
import Logo from '../Logo'
import Nav from '../Nav'
import Burger from '../Burger'

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Logo />
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </Container>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menu.menuOpen,
  }
}

export default connect(mapStateToProps, { setMenuOpen })(Header)
