import AppDispatcher from '../dispatchers/app-dispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/login-constants.js';
import RouterContainer from '../services/router-container'


class LoginActions {
  
  loginUser(jwt){
    var savedJwt = localStorage.getItem('jwt');
    
    if (savedJwt !== jwt) {
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt || "");
    }

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });
  }
  
  logoutUser(){
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}


export default new LoginActions();