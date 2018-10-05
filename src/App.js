import React, {Component} from 'react'
import {connect} from "react-redux"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainPage from "./layout/mainPage"
import Auto from "./layout/auto/auto"
import Home from "./layout/home"
import NotFound from "./cmponents/notFound"
import "./defaultCss.scss"
import "./app.scss"
class App extends Component {
  render() {
    return (
      <div style={this.props.colors} className={"jdi_app_root"}>
        <Router>
          <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/auto"} component={Auto}/>
            <Route path={"/main"} component={MainPage}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  layout: state.layout,
  colors: state.theme.colors
})

export default connect(mapStateToProps)(App)
