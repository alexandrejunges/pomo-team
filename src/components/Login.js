import React, { Component, PropTypes } from 'react'
import AuthService from '../utils/AuthService'

class Login extends Component {
  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props.route
    return (
      <div>
        <h2>Login</h2>
          <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login
