import React from 'react';
import Router, {Route} from 'react-router';
import AuthenticatedApp from './components/auth-app'
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Home from './components/pages/home';
import RouterContainer from './services/router-container';
import LoginActions from './actions/login-actions';
 
var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
	<Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.querySelector('main'));
});

