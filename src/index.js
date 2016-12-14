import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import AuthService from './utils/AuthService'
import { Router, Route, browserHistory } from 'react-router'

import Login from './components/Login'

const auth = new AuthService('XhBtDrcWc0C3XtNDk9HoY6b3aje2OvV2', 'alexandrejunges.auth0.com')

const checkUserLoggedIn = (nextState, replace) => {
  if (auth.loggedIn()) {
    replace({ pathname: '/app' })
  }
}

// validate authentication for private routes
const requireUserAuthenticated = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/login' component={Login} onEnter={checkUserLoggedIn} auth={auth} />
    <Route path='/app' component={App} onEnter={requireUserAuthenticated} auth={auth} />
  </Router>
), document.getElementById('root'))
