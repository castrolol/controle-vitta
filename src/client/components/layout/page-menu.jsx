import React from 'react/addons';
import {Paper, List, ListItem, ListDivider} from 'material-ui';
import Icon from '../data/icon';
import RouterContainer from '../../services/router-container';
import MenuStore from '../../stores/menu-store';
import MenuActions from '../../actions/menu-actions'; 
import ReactMixin from 'react-mixin';

class PageMenu extends React.Component {
 
  constructor(){
      super();
      
      this.state = {
          menuItens: MenuStore.menuItens
      };
  } 
  
  onChange(){
    
      this.setState({
          menuItens: MenuStore.menuItens
      });
  }
  
  componentWillMount(){
  
      MenuStore.addChangeListener(this.onChange.bind(this));
      MenuActions.loadMenuItens();
  }
   
  goToRoute(route){
      return function(){
          RouterContainer.get().transitionTo(route);
      }.bind(this);
  }
 
  render() {
     
    var goToRoute = this.goToRoute.bind(this);
    var items =  this.state.menuItens.map(function(item){
        item = item.toJS();
        return <ListItem onClick={goToRoute(item.acao)} leftIcon={<Icon icon={item.icone} />}>{item.texto}</ListItem>;
    });
     
    return ( 
        <Paper>
            <List subheader="Menu">
               {items}
            </List>
        </Paper>
    );
  }
}
 
ReactMixin(PageMenu.prototype, React.addons.PureRenderMixin);

export default PageMenu;