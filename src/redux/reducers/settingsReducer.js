import {
} from "../actionsTypes"
import {defaultSettings} from "../defaultStore/defaultSettings"

const settingsReducer = (state = defaultSettings, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default settingsReducer