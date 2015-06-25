import DataService from '../core/data-service';

class MenuService extends DataService.of("menu-item") {

	async all(){ 
		var menu = this.model;
		var query =  menu
					.select(menu.star())
					.all();
					
		var result = await query.all(); 
 
		return result;

	} 

}


export default new MenuService();