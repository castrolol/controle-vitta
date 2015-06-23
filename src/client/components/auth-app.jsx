'use strict';

import React from 'react';
import LoginStore from '../stores/login-store'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/auth-service'
import {Styles} from 'material-ui';
import LayoutHeader from './layout/header';

var ThemeManager = new Styles.ThemeManager();

export default class AuthApp extends React.Component {
  constructor() {
    super()
    this.state = this._getLoginState();
    ThemeManager.setTheme(ThemeManager.types.LIGHT);
  }
  
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
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
          <LayoutHeader />  
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
}


AuthApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};
