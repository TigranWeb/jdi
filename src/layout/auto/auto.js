import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {
  Route,
  NavLink,
  Redirect
} from "react-router-dom"
import Login from "./login"
import Reg from "./reg/reg"

import "./auto.scss"

const Auto = ({match}) => {
  return (
    <div className="jdi_auto jdi_area">
      <div className="jdi_auto_wrapper ">
        <div className="jdi_auto_header">
          <NavLink
            to={`${match.url}/login`}
            activeClassName={"active-page"}
            className={"jdi_auto_header_item"}
          >
            <span>
              SIGN IN
            </span>
          </NavLink>
          <span className={"jdi_auto_header_line"}/>
          <span className="jdi_auto_header__divider"> OR </span>
          <NavLink
            to={`${match.url}/reg`}
            activeClassName={"active-page"}
            className={"jdi_auto_header_item"}
          >
            <span>
              SIGN UP
            </span>
          </NavLink>
        </div>
        <Fragment>
          <Route exact={true} path={`${match.path}`} render={() => (<Redirect to={`${match.path}/login`}/>)}/>
          <Route path={`${match.path}/login`} component={Login}/>
          <Route path={`${match.path}/reg`} component={Reg}/>
        </Fragment>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auto)
