import Controller from '../core/controller';
import {get, post, route, noAuth} from '../core/http-extensions';
import usuarioService from '../data-services/usuario-service';

@route
export default class UsuariosController extends Controller {
 
	constructor() {
	 	super(); 
	}

	@post.config({ auth: null })
	async novo(req, reply) {
		try{
			
			let novo = await usuarioService.create(req.payload);	
 
			reply(novo);

		}catch(e){ 			
			console.log(e);
			reply(e, null);
		}
	}
 
	@get
	async todos(req, reply){

		try{
			
			let todos = await usuarioService.all(req.payload);	
 
			reply(todos);

		}catch(e){ 			
			console.log(e);
			reply(e, null);
		}

	}

}