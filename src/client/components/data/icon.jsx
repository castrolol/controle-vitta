import React from 'react';
import {FontIcon} from 'material-ui';
 

class Icon extends React.Component {
   
  getStyle(){
    return {
        icon: {
            margin: "5px"
        } 
    };
  }
   
  
  render() {
  
    var style = this.getStyle();

    var {icon,color, ...props} = this.props;

    if(color){
        style.icon.color = color;
    }

    return ( <FontIcon style={style.icon} className={"mdi mdi-" + icon} {...props} /> );
  } 
}
 

export default Icon;