import React from 'react';
import {AppBar, FlatButton, IconButton} from 'material-ui';
import AuthenticatedComponent from '../auth-component';

class LayoutHeader extends React.Component {
  
  
  getStyle(){
    return {
      
    };
  }
  
  render() {
    
    var style = this.getStyle();
    
    var userInfoComponent = null;
    
    if(this.props.userLoggedIn){
      userInfoComponent =   (<div>
                                <span style={{  color: 'white' }} >{this.props.user.nome}</span>
                                <IconButton iconStyle={{ color: 'white' }} iconClassName="mdi mdi-account"  tooltip="GitHub"/>
                             </div>);
    }
  
    
    return (<AppBar title='Title' iconElementRight={userInfoComponent} />);
  }
}
 

export default AuthenticatedComponent(LayoutHeader);