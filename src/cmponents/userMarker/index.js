import React, {Component} from 'react'
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import {Icon} from 'react-icons-kit'
import {user_circle} from 'react-icons-kit/ikons/user_circle'
import {navItem} from "./itemObj"
import "./userMarker.scss"

const items = navItem.map(item => {
  return (
    <li key={item.key}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  )
})

class UserMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false
    }
    this._toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
  }
  toggleDropdownMenu () {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }))
  }
  render() {
    return (
      <div className="jdi_userMarker">
        <div onClick={this._toggleDropdownMenu}>
        <span className="jdi_userMarker_icon">
          <Icon
            size={30}
            icon={user_circle}
          />
        </span>
          <span className="jdi_userMarker_name">
            {this.props.userName}
          </span>
        </div>
        <nav className="jdi_userMarker_nav jdi_area">
          {this.state.isSelected && items}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.userName
})
export default connect(mapStateToProps)(UserMarker)