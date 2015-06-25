import Controller from '../core/controller';
import {get, route} from '../core/http-extensions';
import menuService from '../data-services/menu-service';


@route
export default class MenuController extends Controller {
 
	constructor() {
	 	super(); 
	}

	@get.at("", { auth: null })
	async todos(req, reply){

		try{
			console.log("ok!");
			let todos = await menuService.all();	
 
			reply(todos);

		}catch(e){ 			
			console.log(e);
			reply(e, null);
		}

	}

}