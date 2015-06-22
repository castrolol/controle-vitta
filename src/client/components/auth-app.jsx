'use strict';

import React from 'react';
import LoginStore from '../stores/login-store'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/auth-service'

export default class AuthApp extends React.Component {
  constructor() {
    super()
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
        <div>
          <header>
            {this.headerItems}
          </header>      
          <main>
            <RouteHandler/>
          </main>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
      <ul >
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
      </ul>)
    } else {
      return (
      <ul >
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <a href="" onClick={this.logout}>Logout</a>
        </li>
      </ul>)
    }
  }
}
