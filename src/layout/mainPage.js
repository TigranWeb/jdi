import React, {Component} from "react"
import {connect} from "react-redux"
import "./mainPage.scss"

class MainPage extends Component {
  render() {
    return (
      <div className="jdi">
        <div className="jdi_header jdi_section">header</div>
        <div className="jdi_main-wrapper">
          <div className="jdi_main jdi_section">main</div>
          <div className="jdi_left-sidebar jdi_section">left sidebar</div>
          <div className="jdi_right-sidebar jdi_section">right sidebar</div>
        </div>
        <div className="jdi_footer jdi_section">footer</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  layout: state.layout
})

export default connect(mapStateToProps)(MainPage)