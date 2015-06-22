import DataService from '../core/data-service';
import sha512 from 'js-sha512';
class UsuarioService extends DataService.of("usuario") {

	async all(){

		var usuario = this.model;
		return usuario
					.select(usuario.uuid, usuario.nome, usuario.login)
					.all()
					.catch(e => console.log(e));

	}

	async create(usuario){
		var usuario = this.model;
		let id = await usuario.insert(usuario).returning(usuario.uuid).exec();
		return usuario.select(usuario.uuid, usuario.nome, usuario.login).get();

	}

	async byToken(token){
		
		var usuario = this.model;

		return	usuario
					.select(usuario.uuid, usuario.nome, usuario.login)
					.where(usuario.token.equals(token))
					.get();
	}

	async credentials(login, pass, isCripted = false){
		var usuario = this.model;

		if(!isCripted){
			pass = `mycatiscalled${login}andhesings${pass}whileplayingkeyboard`;
			pass = sha512(pass);
		}

		return	usuario
					.select(usuario.uuid, usuario.nome, usuario.login)
					.where(usuario.login.equals(login))
					.and(usuario.senha.equals(pass))
					.get();

	}

}


export default new UsuarioService();