import React from 'react';
import AuthenticatedComponent from '../auth-component'

class Home extends React.Component {
  render() {
    return (<h1>Hello {this.props.user ? this.props.user.username : ''}</h1>);
  }
}

export default AuthenticatedComponent(Home);
