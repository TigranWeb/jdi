import {combineReducers} from "redux"
import layout from "./layout"
import settings from "./settings"
import theme from "./theme"
import user from "./user"

export const rootReducers = combineReducers({
  theme,
  settings,
  layout,
  user,
})