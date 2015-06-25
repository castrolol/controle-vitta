import React from 'react';
import AuthenticatedComponent from '../auth-component'
import Page from '../layout/page-layout';
import {Paper, Table} from 'material-ui';

class Produtos extends React.Component {
  
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
          <h1>Produtos</h1>
          
          
          
        </Paper>
      </Page>
    );
  }
}

export default AuthenticatedComponent(Produtos);
