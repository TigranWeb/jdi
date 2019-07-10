import React, {Component} from "react"
import {connect} from "react-redux"
import Header from "./header"
import "./mainPage.scss"

class MainPage extends Component {
  render() {
    return (
      <div className="jdi">
        <div className="jdi_header jdi_area">
          <Header/>
        </div>
        <div className="jdi_main-wrapper jdi_area">
          <div className="jdi_main jdi_area">main</div>
          <div className="jdi_left-sidebar jdi_area">left sidebar</div>
          <div className="jdi_right-sidebar jdi_area">right sidebar</div>
        </div>
        <div className="jdi_footer jdi_area">footer</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  layout: state.layout
})

export default connect(mapStateToProps)(MainPage)