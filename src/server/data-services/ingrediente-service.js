import DataService from '../core/data-service';

class IngredienteService extends DataService.of("ingrediente") {

	async all(){ 
		var ingrediente = this.model;
		var query =  ingrediente
					.select(ingrediente.star())
					.all();
					
		var result = await query.all(); 
 
		return result;

	} 

}


export default new IngredienteService();