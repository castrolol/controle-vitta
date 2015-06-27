import React from 'react';
import ReactVelocityTransitionGroup from 'velocity-transition-group';
import GridHeader from './grid-header';
import GridRow from './grid-row';


class DataGrid extends React.Component {
  
  constructor(){
      super();
      this.state = {
          
      };
  }
  
  static get defaultProps(){
      return {
          data: [],
          keyProp: "id"
      }
  }
  
  getStyle(){
          
      return {
      //.root
          rootClass: {
                  fontWeight: "normal",
                  fontSize: "12px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  height: "56px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  color: "rgba(0, 0, 0, 0.54)",
                  position: "relative"
          }
      }

    
  }
  
  render() {
    
    var styles = this.getStyle();
    
    var rows = this.props.data.map((dataItem) => {
      var key = dataItem.key;
      return <GridRow key={dataItem[this.props.keyProp]} cols={this.props.cols} model={dataItem} />
    });
    
    
    return (
        <table style={styles.rootClass}  >
            <GridHeader  cols={this.props.cols} />
            {rows}
        </table>
    );
    
  }
}
 

export default DataGrid;