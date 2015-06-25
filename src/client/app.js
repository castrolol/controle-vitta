require('babel/register');

import React from 'react';
import LoginActions from './actions/login-actions';
 
import router from './routes';

import RouterContainer from './services/router-container';

  
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.querySelector('main'));
});

