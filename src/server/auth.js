import usuarioService from "./data-services/usuario-service"; 
import jwt from 'jsonwebtoken'; 
export const PRIVATEKEY = 'mycatplaysthefuckingkeyboard';

class Auth {

	install(app){
	 
		var validate = async function (decodedToken, callback) {
		
		    var credentials = await usuarioService.byToken(decodedToken.uuid);
		
		
		    if (!credentials) {
		        return callback(error, false, credentials);
		    }
		
		    return callback(null, true, credentials)
		};


		app.server.register(require('hapi-auth-jwt'), function (error) {
		
		    app.server.auth.strategy('simple', 'jwt', {
		        key: PRIVATEKEY,
		        validateFunc: validate
		    });
		});
		
		app.preparations.push(function(){
			if(this.config && typeof this.config.auth != "undefined") return;

			if(!this.config) this.config = {};
			this.config.auth = "simple";

		});
 


	}

}


export default new Auth();

