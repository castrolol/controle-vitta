import React from 'react';
import {AppBar, FlatButton, FontIcon, List, ListItem, ListDivider, Paper} from 'material-ui';
import AuthenticatedComponent from '../auth-component';
import ReactVelocityTransitionGroup from 'velocity-transition-group';
import Auth from '../../services/auth-service'
import Icon from './icon';

class UserInfo extends React.Component {
  
  constructor(){
      super();
      this.state = {
          isPopupOpen: false
      };
  }
  
  getStyle(){
    return {
        button: {
            color: 'white',
            backgroundColor: "rgb(0, 0, 0, 0)"
        },
        icon: {
            color: 'white',
            margin: "5px"
        },
        popup: {
            position: "absolute", 
            width: "200px",
            right: "10px",
            top: "12px",
            transformOrigin: "right top"
        }
    };
  }
  
  getItems(){
      
      
      
      var itens = [
          { text: "Sair", icon: "logout", action: Auth.logout.bind(Auth)  }
      ];
      
      return itens;
  }
  
  handleUserClick(){
      this.setState({
          isPopupOpen: !this.state.isPopupOpen
      })
  }
  
  handlePopupMouseLeave(){
      this.setState({
          isPopupOpen: false
      });
  }
  
  render() {
    
    
    if(!this.props.userLoggedIn){
        return (<span />);
    }  

    var handleUserClick = this.handleUserClick.bind(this);
   

    var style = this.getStyle();

    var popup = null;
    
    if(this.state.isPopupOpen){
        popup = this.getPopup(style.popup);
    }

    return (<div>
                <FlatButton  style={style.button} onClick={handleUserClick} label={this.props.user.nome} >
                    <Icon icon="account" color="white" tooltip="GitHub"/>
                </FlatButton>
                <ReactVelocityTransitionGroup  enter={{scale: [1, 1.2, 0.5], opacity: [1,0.3 ] }} leave={{scale: 0.7,opacity: [0,0.6] }} easing='spring' duration={333} >
                  {popup}
                </ReactVelocityTransitionGroup>
            </div>);
  }
  
  closePopupAnd(action){
      
      return function(){
          this.setState({
            isPopupOpen: false
        });
        if(typeof action == "function") action();
      }.bind(this);
  }
  
  getPopup(style){
      var handlePopupMouseLeave = this.handlePopupMouseLeave.bind(this);
      var closePopupAnd = this.closePopupAnd.bind(this);
      
      
      var itens = this.getItems().map(function(item){
         var icon = <FontIcon className={"mdi mdi-" + item.icon} />;
         return <ListItem onClick={closePopupAnd(item.action)}  leftIcon={icon} >{item.text}</ListItem>;
      });
      
      return (<Paper style={style} onMouseLeave={handlePopupMouseLeave} >
                <List>
                   {itens}
                </List>
              </Paper>);
  }
}
 

export default AuthenticatedComponent(UserInfo);