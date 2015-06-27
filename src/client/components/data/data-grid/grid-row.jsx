import React from 'react';
import ReactVelocityTransitionGroup from 'velocity-transition-group'; 

class GridRow extends React.Component {
  
  constructor(){
      super();
      this.state = {
          
      };
  }
  
   static get defaultProps(){
        return {
            model: null,
            cols: []
        };
   }
   
   
  
  _getCells(){
      
      var colNames = Object.keys(this.props.cols);
      var model = this.props.model || {};
      var cols = this.props.cols;
      
      return colNames
                .map(function(colName){
                    var col = cols[colName];
                    
                    var content = null;
                    if(colName in model){
                        content = model[colName];
                        if('handler' in col){
                            content = col.handler(content);
                        }
                    }
                    return content;
                    
                }).map(x => <td>{x}</td>);
      
  }
  
  render() {
     
    var cells = this._getCells();
     
    return (
        <tr>
            {cells}
        </tr>
    );
    
  }
}
 

export default GridRow;