import Router, {Route} from 'react-router';

import React from 'react';

import AuthenticatedApp from './components/auth-app'
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Home from './components/pages/home';
import Produtos from './components/pages/produtos';
import Ingrediente from './components/pages/ingredientes';
 

var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
	  <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
    <Route name="produto" handler={Produtos} />
    <Route name="ingrediente" handler={Ingrediente} />
  </Route>
);


export default Router.create({routes}); 

