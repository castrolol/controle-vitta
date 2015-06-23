import DataService from '../core/data-service';
import sha512 from 'js-sha512';
class UsuarioService extends DataService.of("usuario") {

	async all(){

		var usuario = this.model;
		return await usuario
					.select(usuario.uuid, usuario.nome, usuario.login)
					.all();

	}

	async create(payload){
		var usuario = this.model;
		var entity = this.normalize(payload);
		let id = await usuario.insert(entity).returning(usuario.uuid).exec();
		return await usuario.select(usuario.uuid, usuario.nome, usuario.login).get();
	}

	async byToken(token){
		
		var usuario = this.model;

		return await usuario
						.select(usuario.uuid, usuario.nome, usuario.login)
						.where(usuario.token.equals(token))
						.get();
	}

	async credentials(login, pass, isCripted = false){
		var usuario = this.model;

		if(!isCripted){
			pass = this.encrypt(login, pass); 
		}
		
		var query =	usuario
					.select(usuario.uuid, usuario.nome, usuario.login)
					.where(usuario.login.equals(login))
					.and(usuario.senha.equals(pass));
					
					
		var result = await query.get(); 
		return result;

	}
	
	encrypt(login, senha){
		return sha512(`mycatiscalled${login}andhesings${senha}whileplayingkeyboard`);
	}
	
	normalize(entity){
		var login = entity.login;
		var senha =this.encrypt(login,  entity.senha); 
		entity.senha = senha;
		
	}

}


export default new UsuarioService();