import db from "../data/db";


var menuItem = db.define({
	name: 'menu_item',
	columns: {
		menu_item_id: {primaryKey: true},
		tipo: {},
		texto: {},
		icone: {},
		acao: {}
	}
});

export default menuItem;