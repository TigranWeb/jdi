import {
  LAYOUT
} from "../actionsTypes"
const  defaultState = ["tiko"]

const LayoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LAYOUT:
      return state
    default:
      return state
  }
}

export default LayoutReducer