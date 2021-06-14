const SET_SLIDE = 'SET_SLIDE'
const SET_DARK_MODE = 'SET_DARK_MODE'

const initialState = {
  id: 0,
  darkMode: false,
}

export const slider = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDE:
      return {
        ...state,
        id: action.payload,
      }

    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      }

    default:
      return state
  }
}

export const setSlide = (id) => {
  return {
    type: SET_SLIDE,
    payload: id,
  }
}

export const setDarkMode = (bool) => {
  return {
    type: SET_DARK_MODE,
    payload: bool,
  }
}
