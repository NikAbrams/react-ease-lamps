import { combineReducers, createStore } from 'redux'
import { slider } from './reducers/slider'
import { menu } from './reducers/menu'

export const store = createStore(
  combineReducers({
    slider,
    menu,
  })
)
