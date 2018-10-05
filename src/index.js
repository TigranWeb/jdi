import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import store from "./redux/store"

registerServiceWorker()

const Root = () => {
  return (
    <Provider store={store}>
      {/*<Router>*/}
        <App/>
      {/*</Router>*/}
    </Provider>
  )

}

ReactDOM.render(<Root/>, document.getElementById('root'))
