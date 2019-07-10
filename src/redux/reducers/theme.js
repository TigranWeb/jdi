import {themeConst} from "../constants/theme"

const layout = (state = themeConst.defaultState, action) => {
  switch (action.type) {
    case themeConst.COLOR:
      return {
        ...state,
        colors:{
          ...state.colors,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export default layout