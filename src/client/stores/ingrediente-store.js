import {SHOW_INGREDIENTES} from '../constants/ingrediente-constants';
import BaseStore from '../base/store'; 
import Immutable from 'immutable';

class IngredienteStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this.ingredientes = new Immutable.List([]);
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case SHOW_INGREDIENTES:
        if(this.ingredientes.equals(action.ingredientes)) return;
        this.ingredientes = action.ingredientes;
        this.emitChange();
        break;
      default:
        break;
    };
  } 
}

export default new IngredienteStore();
