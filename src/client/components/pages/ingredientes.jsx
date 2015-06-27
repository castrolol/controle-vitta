import React from 'react';
import AuthenticatedComponent from '../auth-component'
import Page from '../layout/page-layout';
import {Paper, Table} from 'material-ui';
import Immutable from 'immutable';
import IngredienteActions from '../../actions/ingrediente-actions';
import IngredienteStore from '../../stores/ingrediente-store';
import DataGrid from '../data/data-grid';
import Number from '../data/number';

class Ingredientes extends React.Component {
  
  constructor(){
    super();
    this.state = {
      ingredientes: IngredienteStore.ingredientes
    };
  }
  
  getStyle(){
    return {
      root: {
        padding: "16px",
        boxSizing: "border-box",
      }
    };
  }
  
   onChange(){
    this.setState({
      ingredientes: IngredienteStore.ingredientes
    });
  }
  
  
  componentDidMount(){
    IngredienteActions.showIngredientes();
    IngredienteStore.addChangeListener(this.onChange.bind(this));
  }
  
 
  getRowData(){
 
    return this.state.ingredientes;
    
  }
  
  getColData(){
    return {
        headers: {
          ingrediente_id: {
            content: '#',
            tooltip: 'Código do Ingrediente',
            style: { width: "20px" }
          },
          nome: {
            content: 'Nome',
            tooltip: 'Nome do Ingrediente'
          },
          unidade_medida: {
            content: 'Unidade Medida',
            tooltip: 'Unidade Medida' , 
            style: { width: "150px" }
          },
          valor: {
            content: 'Valor (R$)',
            tooltip: 'Valor Em Reais' , 
            style: { width: "100px" },
            handler: x => <Number value={x} format="currency" />
          }
       },
       order: ['ingrediente_id', 'nome', 'unidadeMedida', 'valor']
    }
  }
  
  render() {
    
    let style = this.getStyle();
    
    let rowData = this.getRowData(); 
    let colData = this.getColData();
 
    let table = null;
    debugger;
    if(rowData.length ){
      table = <DataGrid cols={colData.headers} data={rowData} keyProp="ingrediente_id" />;
    }
    
    return (
      <Page>
        <Paper style={style.root} >
          <h1>Ingredientes</h1>
          {table}
        </Paper>
      </Page>
    );
  }
} 
  

export default AuthenticatedComponent(Ingredientes);
