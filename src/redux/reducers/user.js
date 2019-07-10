import {userConst} from "../constants/user"

const layout = (state = userConst.defaultState, action) => {
  switch (action.type) {
    case userConst.NAME:
      return {
        ...state
      }
    default:
      return state
  }
}

export default layout