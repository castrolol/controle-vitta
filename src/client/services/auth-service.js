import request from '../ext/request';
import {LOGIN_URL, SIGNUP_URL} from '../constants/login-constants';
import LoginActions from '../actions/login-actions';

class AuthService {

  login(username, password) {

    var req = request
                .get(LOGIN_URL)
                .send({ username, password })
                .end();


    return this.handleAuth(req);
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(nome, login, senha) {

    var req = request
                .get(SIGNUP_URL)
                .send({ nome, login, senha })
                .end();

    return this.handleAuth(req);
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then((response) => {
        LoginActions.loginUser(response.id_token);
        return true;
      });
  }
}

export default new AuthService()
