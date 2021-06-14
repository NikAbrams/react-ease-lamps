import React from 'react'
import { connect } from 'react-redux'
import { setSlide } from '../../redux/reducers/slider'

// Styles
import styles from './SliderNav.module.scss'

// Components
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

import { images } from '../../images'

const SliderNav = ({ id, setSlide, darkMode, setDarkMode }) => {
  return (
    <div className={styles.sliderNav}>
      <div className={styles.sliderNavItems}>
        {images.map((url, i) => {
          const itemClass =
            id === i
              ? `${styles.sliderNavItem} ${styles.active}`
              : styles.sliderNavItem
          return (
            <div key={url} className={itemClass} onClick={() => setSlide(i)}>
              <img src={url} alt="" />
            </div>
          )
        })}
      </div>
      <div className={styles.sliderNavLight}>
        <div
          className={
            !darkMode
              ? `${styles.sliderNavLightItem} ${styles.active}`
              : styles.sliderNavLightItem
          }
          onClick={() => setDarkMode(false)}
        >
          <SunIcon />
        </div>
        <div
          className={
            darkMode
              ? `${styles.sliderNavLightItem} ${styles.active}`
              : styles.sliderNavLightItem
          }
          onClick={() => setDarkMode(true)}
        >
          <MoonIcon />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.slider.id,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSlide: (i) => dispatch(setSlide(i)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderNav)
