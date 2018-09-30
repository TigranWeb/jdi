import {createStore, combineReducers} from "redux"
import layoutReducer from "./reducers/layoutReducer"
import settingsReducer from "./reducers/settingsReducer"
const  store = () => (
   createStore(
    combineReducers({
      layoutReducer,
      settingsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store()