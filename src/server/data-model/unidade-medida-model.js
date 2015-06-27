import db from "../data/db";


var unidadeMedida = db.define({
	name: 'unidade_medida',
	columns: {
		unidade_medida_id: {primaryKey: true},
		descricao: {},
		proporcao: {},
		abreviacao: {}
	}
});

export default unidadeMedida;