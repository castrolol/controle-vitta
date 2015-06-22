import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../../services/auth-service'

export default class Signup extends React.Component {

  constructor() {
    super()
    this.state = {
      login: '',
      nome: '',
      senha: ''
    };
  }

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.nome, this.state.login, this.state.senha)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form >
        <div  >
          <label htmlFor="extra">Nome</label>
          <input type="text" valueLink={this.linkState('nome')}  id="password" ref="password" placeholder="Nome" />
        </div>
        <div >
          <label htmlFor="username">Username</label>
          <input type="text" valueLink={this.linkState('login')}   id="username" placeholder="Username" />
        </div>
        <div  >
          <label htmlFor="password">Password</label>
          <input type="password" valueLink={this.linkState('senha')}  id="password" ref="password" placeholder="Password" />
        </div>
      
        <button type="submit"   onClick={this.signup.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
