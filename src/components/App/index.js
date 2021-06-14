import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Styles
import styles from './App.module.scss'

// Components
import Header from '../Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Contacts from '../pages/Contacts'

const App = () => {
  const location = useLocation()

  return (
    <>
      <Header />
      {/* Без location. Но анимация выхода из страницы работать не будет */}
      {/* <AnimatePresence exitBeforeEnter initial={false}> 
                <Switch>
                    <Route path="/collections" component={Collections} />
                    <Route path="/" component={Home} />
                </Switch>
            </AnimatePresence> */}
      {/* С location */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  )
}

export default App
