import React from 'react';
import AuthenticatedComponent from '../auth-component'
import Page from '../layout/page-layout';
import {Paper, Table} from 'material-ui';
import Immutable from 'immutable';
import IngredienteActions from '../../actions/ingrediente-actions';
import IngredienteStore from '../../stores/ingrediente-store';

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
     
    return this.state.ingredientes.map(function(ingrediente){
      
        return {  
                id: {content: ingrediente.get("ingrediente_id") },
                nome: {content: ingrediente.get("nome")},
                unidadeMedida: {content: ingrediente.get('unidade_medida')},
                valor: {content: ingrediente.get('valor')},
        };
      
    }).toJS();
    
  }
  
  getColData(){
    return {
        headers: {
          id: {
            content: 'id',
            tooltip: '#'
          },
          nome: {
            content: 'nome',
            tooltip: 'Nome'
          },
          unidadeMedida: {
            content: 'unidade_medida',
            tooltip: 'Unidade Medida'
          },
          valor: {
            content: 'valor',
            tooltip: 'Valor (R$)'
          }
       },
       order: ['id', 'name', 'status']
    }
  }
  
  render() {
    
    let style = this.getStyle();
    
    let rowData = this.getRowData(); 
    let colData = this.getColData();
 
    let table = null;
    
    if(rowData.length ){
      table = <Table
                headerColumns={colData.headers}
                columnOrder={colData.order}
                rowData={rowData} />;
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
