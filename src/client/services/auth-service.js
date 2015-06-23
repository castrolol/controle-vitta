import request from '../ext/request';
import {LOGIN_URL, SIGNUP_URL} from '../constants/login-constants';
import LoginActions from '../actions/login-actions';

class AuthService {

  login(username, password) {

    var req = request
                .post(LOGIN_URL)
                .send({ username, password })
                .end();


    return this.handleAuth(req);
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(nome, login, senha) {

    var req = request
                .post(SIGNUP_URL)
                .send({ nome, login, senha })
                .end();

    return this.handleAuth(req);
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then((response) => { 
        if(!response.body || !response.body.token){
          throw response.body || new Error("Erro desconhecido");
        }
        LoginActions.loginUser(response.body.token);
        return true;
      });
  }
}

export default new AuthService()
