import React from 'react'
import { connect } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

// Styles
import styles from './Slider.module.scss'

import { images } from '../../images'

const transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.6,
}

const sliderVariantsFromTop = {
  hidden: {
    y: '-80%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '-100%',
    opacity: 0,
  },
}

const sliderVariantsFromLeft = {
  hidden: {
    x: '-80%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '80%',
    opacity: 0,
  },
}

const Slider = ({ id, direction = 'fromLeft', ...otherProps }) => {
  const animationVariants =
    direction === 'fromTop'
      ? sliderVariantsFromTop
      : direction === 'fromLeft'
      ? sliderVariantsFromLeft
      : ''

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={id} // обязательно задавать key, чтобы анимация срабатывала при клике
        {...otherProps}
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={transition}
      >
        <img src={images[id]} alt="" />
      </motion.div>
    </AnimatePresence>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.slider.id,
  }
}

export default connect(mapStateToProps)(Slider)
