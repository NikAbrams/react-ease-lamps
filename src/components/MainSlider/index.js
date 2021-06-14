import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { connect } from 'react-redux'
import { setDarkMode } from '../../redux/reducers/slider'

// Styles
import styles from './MainSlider.module.scss'

// Components
import Slider from '../Slider'
import SliderNav from '../SliderNav'

import mainLight from '../../assets/img/main-light.jpg'
import mainDark from '../../assets/img/main-dark.jpg'

const transition = { ease: 'easeInOut', duration: 0.3 }

const imageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: transition,
  },
  exit: {
    opacity: 0,
    transition: transition,
  },
}

const MainSlider = ({ darkMode, setDarkMode }) => {
  return (
    <div className={styles.mainSliderWrapper}>
      <SliderNav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={styles.mainSliderImg}>
        <AnimatePresence initial={false}>
          {darkMode ? (
            <motion.img
              key={mainDark}
              src={mainDark}
              alt=""
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ) : (
            <motion.img
              key={mainLight}
              src={mainLight}
              alt=""
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
        <Slider direction="fromTop" className={styles.mainSlider} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.slider.darkMode,
  }
}

export default connect(mapStateToProps, { setDarkMode })(MainSlider)
