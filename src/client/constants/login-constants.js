var BASE_URL = 'http://localhost:8000/';
if( process.env.IP){
  BASE_URL = 'http://' +  process.env.IP + ':' +  process.env.PORT  + '/';
}

export default {
  BASE_URL: BASE_URL,
  LOGIN_URL: BASE_URL + 'auth/login',
  SIGNUP_URL: BASE_URL + 'usuarios/novo',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER'
}
