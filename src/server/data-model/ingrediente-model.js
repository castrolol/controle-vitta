import db from "../data/db";


var ingrediente = db.define({
	name: 'ingrediente',
	columns: {
		menu_item_id: {primaryKey: true},
		nome: {},
		unidade_medida_id: {},
		valor: {}
	},
	has: {
	    unidadeMedida: {from: 'unidade_medida'}
	}
});

export default ingrediente;