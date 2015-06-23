import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../../services/auth-service'
import {Paper, TextField, FlatButton} from 'material-ui';

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  getStyle(){
    
    return {
      root: {
        width: "400px",
        margin: "0 auto",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        position: "absolute",
      },
      container: {
        padding: "17px",
      },
      textBox: {
        width: "100%"
      },
      actions: {
        textAlign: "right" ,
        marginTop: "20px"
      },
      divider: {
        margin:0,
        marginTop:"-1px",
        marginLeft:0,
        height:"1px",
        border:"none",
        backgroundColor:"#e0e0e0"
      },
      title: {
        paddingTop: "16px",
        marginBottom: "12px",
        fontWeight: "300",
        color: "rgba(0, 0, 0, 0.87)",
        paddingLeft: "16px",
      }
    };
    
  }

  render() {
    
    var style = this.getStyle();
    var handleLogin = this.login.bind(this);
    
    return (
      <Paper style={style.root} >
        <h2 style={style.title} >Acesso</h2>
        <div style={style.container} >
          <div>
            <TextField style={style.textBox} valueLink={this.linkState('user')} placeholder="Usuário" />
          </div>
           <div>
            <TextField type="password"  style={style.textBox} valueLink={this.linkState('password')} placeholder="Senha" />
          </div>
          <div style={style.actions} >
            <FlatButton label="Acessar" secondary={true} onClick={handleLogin} />
          </div>
        </div>
      </Paper>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
