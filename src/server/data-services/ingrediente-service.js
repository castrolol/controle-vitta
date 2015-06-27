import DataService from '../core/data-service';
import unidadeMedida from '../data-model/unidade-medida-model';

class IngredienteService extends DataService.of("ingrediente") {

	async all(){ 
		try{
			
			var ingrediente = this.model; 
			var query =  ingrediente
						.select(ingrediente.star(), unidadeMedida.descricao.as("unidade_medida"))
	  					.from(ingrediente
	  									.join(unidadeMedida)
	  									.on(ingrediente.unidade_medida_id.equals(unidadeMedida.unidade_medida_id))
	  					)
						.all();
						
			var result = await query.all(); 
	 
			return result;
		}catch(e){
			console.log(e);
			console.log("broken!");
			return null;
		}

	} 

}


export default new IngredienteService();