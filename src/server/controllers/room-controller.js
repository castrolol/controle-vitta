import Controller from '../core/controller';
import {get, route} from '../core/http-extensions';

@route
export default class RoomController extends Controller {
 
	constructor() {
	 	super(); 
	}

	@get.at("")
	async all(req, reply) {
		if(!this.rooms) this.rooms = ["Sala1", "Sala2", "Sala3"];
		

		if (Math.random() < 0.45) {
			this.rooms.push("Sala" + Math.round(Math.random() * 160));
		}
		
		reply({
			rooms: this.rooms
		});
	}
 

}