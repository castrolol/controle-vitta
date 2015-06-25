import React from 'react';
import {AppBar, FlatButton, IconButton} from 'material-ui';
import AuthenticatedComponent from '../auth-component';
import UserInfo from '../data/user-info';
import {APP_NAME} from '../../constants/app-constants';

class LayoutHeader extends React.Component {
 
  render() {
     
    return (<AppBar title={APP_NAME} iconElementRight={<UserInfo />} />);
  }
}
 

export default LayoutHeader;