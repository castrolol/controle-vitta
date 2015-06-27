import React from 'react';
import ReactVelocityTransitionGroup from 'velocity-transition-group'; 
class GridHeader extends React.Component {
  
  constructor(){
      super();
      this.state = {
          
      };
  }
  
  static get defaultProps(){
      return {
          cols: []
      }
  }
  
  _getCols(){
      
      var colNames = Object.keys(this.props.cols);
      var cols = this.props.cols;
      
      return colNames.map(function(colName){
          
         return <th>{cols[colName].content}</th>; 
          
      });
      
  }
  
  render() {
    var cols = this._getCols();
    
    
    return (
        <thead>
            <tr>
                {cols}
            </tr>
        </thead>
    );
    
  }
}
 

export default GridHeader;