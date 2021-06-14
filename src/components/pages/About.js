import React from 'react'
import { motion } from 'framer-motion'

// Styles
import styles from '../../assets/scss/pages/About.module.scss'

// Components
import Container from '../Container'

const transition = { duration: 0.4 }

const pageVariants = {
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

const About = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className={styles.about}>
        <Container>
          <div className={styles.aboutWrapper}>
            <p>
              EASE - это креативная мастерская, которая объеденила лучших
              дизайнеров со всего мира в одну сплочённую команду. Мы занимаемся
              созданием уникальных коллекций ламп, светильников и люстр. Наша
              команда всегда в поисках новинок светодизайна. Мы следим за
              модными трендами в освещении и всегда идем в ногу со временем.{' '}
            </p>
            <p>
              В творческой мастерской Фабрики Эдисона создаются уникальные вещи,
              мы творим настоящие чудеса в мире освещения. Каждое изделие
              является настоящим произведением искусства.
            </p>
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default About
