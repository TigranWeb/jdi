import {layoutConst} from "../constants/layout"

const layout = (state = layoutConst.defaultState, action) => {
  switch (action.type) {
    case layoutConst.LOGIN:
      return {
        ...state,
        login: !state.login
      }
    default:
      return state
  }
}

export default layout