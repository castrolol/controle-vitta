import usuarioService from "./data-services/usuario-service"; 
 class Auth {

	install(app){
		return;
		app.preparations.push(function(){
			console.log("prepare!");
			if(this.config && typeof this.config.auth != "undefined") return;

			if(!this.config) this.config = {};
			this.config.auth = "simple";

		});

		app.server.register(require('hapi-auth-bearer-token'), function (err) {

		    app.server.auth.strategy('simple', 'bearer-access-token', {
		        allowQueryToken: false,
		        validateFunc: async function( token, callback ) {
 
		            var usuario = await usuarioService.byToken(token);

		            if(usuario){
		                callback(null, true, { token: token, usuario: usuario })
		            } else {
		                callback(null, false, { token: token })
		            }
		        }
		    });
		});


	}

}


export default new Auth();

