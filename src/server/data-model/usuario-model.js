import db from "../data/db";


var usuario = db.define({
	name: 'usuario',
	columns: {
		usuario_id: {primaryKey: true},
		nome: {},
		login: {},
		senha: {},
		uuid: {},
		token: {}
	},
	has: {
		posts: { from: 'perfil_usuario', many: true }
	}
});

export default usuario;