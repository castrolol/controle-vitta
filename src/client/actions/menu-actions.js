import AppDispatcher from '../dispatchers/app-dispatcher.js';
import { LOAD_MENU_ITEMS, MENU_URL }
from '../constants/menu-constants.js';
import request from '../ext/request';
import Cache from '../ext/cache';
import Immutable from 'immutable';

class MenuActions {

  loadMenuItens() {

    Cache.get(LOAD_MENU_ITEMS, (done) => {

      var req = request
        .get(MENU_URL)
        .end()
        .then(function(req){
          done(null, req.body);
        })
        .catch(function(err){
          done(err, null);
        });
        
    }).then(function(menuItens) {
      menuItens = Immutable.fromJS(menuItens);
      AppDispatcher.dispatch({
        actionType: LOAD_MENU_ITEMS,
        menuItens: menuItens
      });
      
    }).catch(function(err){
        console.log("error!");
    });
  
  }

}


export default new MenuActions();