import React from 'react'
import { motion } from 'framer-motion'

// Styles
import styles from '../../assets/scss/pages/Contacts.module.scss'

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

const Contacts = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className={styles.contacts}>
        <Container>
          <div className={styles.contactsWrapper}>
            <p>
              Вы можете приехать к нам в мастерскую и в живую ощутить все чудеса
              наших работ.
            </p>
            <ul className={styles.contactsList}>
              <li className={styles.contactsListItem}>
                <span>Адрес:</span>Москва, м. "Нахимовский проспект",
                Нахимовский проспект, 24б, торгово-выставочный центр DekorExpo,
                шоурум EASE LAMPS
              </li>
              <li className={styles.contactsListItem}>
                <span>Режим работы:</span>с 10-00 до 21-00 без выходных
              </li>
              <li className={styles.contactsListItem}>
                <span>Телефон:</span>+7 (966) 140-21-12
              </li>
              <li className={styles.contactsListItem}>
                <span>Эл. почта:</span>ease@gmail.com
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default Contacts
