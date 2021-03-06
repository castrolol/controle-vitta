import React from 'react';
import AuthenticatedComponent from '../auth-component'
import Page from '../layout/page-layout';
import {Paper} from 'material-ui';
import {RouteHandler} from 'react-router';
class Home extends React.Component {
  
  getStyle(){
    return {
      root: {
        padding: "16px",
        boxSizing: "border-box",
      }
    };
  }
  
  render() {
    
    var style = this.getStyle();
    
    return (
      <Page>
        <Paper style={style.root} >
          <RouteHandler />
        </Paper>
      </Page>
    );
  }
}

export default AuthenticatedComponent(Home);
