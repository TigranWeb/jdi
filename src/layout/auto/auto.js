import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom"
import Login from "./login"
import Reg from "./reg/reg"

import "./auto.scss"

class Auto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: false
    }
    this.changePageToReg = this._changePageToReg.bind(this)
    this.changePageToLogin = this._changePageToLogin.bind(this)
  }

  _changePageToReg() {
    if (!this.state.newUser)
      this.setState({newUser: true})
  }

  _changePageToLogin() {
    if (this.state.newUser)
      this.setState({newUser: false})
  }

  render() {
    return (
      <Router>
        <div className="jdi_auto jdi_area">
          <div className="jdi_auto_wrapper ">
            <div className="jdi_auto_header">
              <NavLink
                to={"/auto/login"}
                activeClassName={"active-page"}
                className={"jdi_auto_header_item"}>
                <span >
                  SIGN IN
                </span>
              </NavLink>
              <span className={"jdi_auto_header_line"}/>
              <span className="jdi_auto_header__divider"> OR </span>
              <NavLink to={"/auto/reg"} activeClassName={"active-page"} className={"jdi_auto_header_item"}>
                <span >
                  SIGN UP
                </span>
              </NavLink>
            </div>
            <Fragment>
              <Route path={`/auto/login`} component={Login}/>
              <Route path={`/auto/reg`} component={Reg}/>
            </Fragment>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auto)
