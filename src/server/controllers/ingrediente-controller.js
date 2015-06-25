import Controller from '../core/controller';
import {get, route} from '../core/http-extensions';
import ingredienteService from '../data-services/ingrediente-service';


@route
export default class IngredienteController extends Controller {
 
	constructor() {
	 	super(); 
	}

	@get.at("")
	async todos(req, reply){

		try{
			let todos = await ingredienteService.all();	
 			console.log("ok1");
 			todos.forEach(function(ingrediente){
 				ingrediente.valor = ingrediente.valor;
 			});
 
			reply(todos);

		}catch(e){ 			
			console.log(e);
			reply(e, null);
		}

	}

}