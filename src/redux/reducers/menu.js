const SET_MENU_OPEN = 'SET_MENU_OPEN'

const initialState = {
  menuOpen: false,
}

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      }

    default:
      return state
  }
}

export const setMenuOpen = () => {
  return {
    type: SET_MENU_OPEN,
  }
}
