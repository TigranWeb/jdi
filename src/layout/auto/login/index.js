import React, {Component} from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link, withRouter} from "react-router-dom"
import {login} from "../../../redux/actions/index"
import "./login.scss"

class Login extends Component {
  constructor(props) {
    super(props)
    this.clickLogin = this.clickLogin.bind(this)
  }

  clickLogin() {
    // this.props.login()
    this.props.history.push("/main")
  }

  render() {
    return (
      <form className="jdi_login">
        <label className="jdi_login_email jdi_login_label">
          email or user name
          <input
            type="text"
            className="jdi_login_input"
          />
        </label>
        <label className="jdi_login_password jdi_login_label">
          password
          <input
            type="text"
            className="jdi_login_input"
          />
        </label>
        <Link
          type="submit"
          className="jdi_login_button"
          to="/main"
          // onClick={this.clickLogin}
        >
          LOGIN
        </Link>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
// export default withRouter(Login)