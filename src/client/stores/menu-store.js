import {LOAD_MENU_ITEMS} from '../constants/menu-constants';
import BaseStore from '../base/store'; 
import Immutable from 'immutable';

class MenuStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this.menuItens = new Immutable.List([]);
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOAD_MENU_ITEMS:
        if(this.menuItens.equals(action.menuItens)) return;
        this.menuItens = action.menuItens;
        this.emitChange();
        break;
      default:
        break;
    };
  } 
}

export default new MenuStore();
