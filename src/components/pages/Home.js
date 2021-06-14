import React from 'react'
import { motion } from 'framer-motion'

// Styles
import styles from '../../assets/scss/pages/Home.module.scss'

// Components
import Container from '../Container'
import MainSlider from '../MainSlider'
import Slider from '../Slider'

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

const Home = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroBody}>
            <div className={styles.heroLeft}>
              <div className={styles.heroLeftTop}>
                <p>
                  Коллекция освещения вдохновлена геометрическими работами
                  великих художников-супрематистов Кисицкого и Казимира
                  Малевича.
                </p>
                <p>
                  Супрематизм - модернистское движение в искусстве начала
                  двадцатого века, ориентированное на основные геометрические
                  формы, такие как круги, квадраты, линии и прямоугольники.
                  Геометрическая структура светильников всегда будет похожа на
                  небольшой арт-объект в вашем доме.
                </p>
              </div>
              <div className={styles.heroLeftBottom}>
                <ul className={styles.heroLeftInfo}>
                  <li className={styles.heroLeftInfoItem}>
                    <span>Материал:</span>Медь
                  </li>
                  <li className={styles.heroLeftInfoItem}>
                    <span>Размеры (cm):</span>H 33 x W 15 x D 15
                  </li>
                  <li className={styles.heroLeftInfoItem}>
                    <span>Вес:</span>2,5 kg
                  </li>
                  <li className={styles.heroLeftInfoItem}>
                    <span>Электрификация:</span>
                    <br />
                    LED 10W | G9 | 220-240V | 50 Hz
                  </li>
                </ul>
                <Slider
                  direction="fromLeft"
                  className={styles.heroLeftSlider}
                />
              </div>
            </div>
            <div className={styles.heroRight}>
              <MainSlider />
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default Home
