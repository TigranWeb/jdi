import React, {Component} from 'react'
import {NavLink} from "react-router-dom"
import "./home.scss"
class Home extends Component {
  render() {
    return (
      <div className={"jdi_area jdi_float"}>
        <nav className={"jdi_home_nav "}>
          <li>
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/main"}> Main </NavLink>
          </li>
          <li>
            <NavLink to={"/auto"}>Login / Reg </NavLink>
          </li>
        </nav>
        Home
      </div>
    )
  }
}

export default Home