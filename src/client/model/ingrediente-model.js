import {Record} from 'immutable';

var ingredienteScheme = {
    ingrediente_id: 0,
	nome: "",
	unidade_medida_id: 0,
	unidade_medida: "",
	valor: 0
}

class Ingrediente extends Record(ingredienteScheme) {
    
    static from(item){
        if(item instanceof Array){
            return item.map( x => Ingrediente.from(x));
        }
        return new Ingrediente(item);
    }
    
}



export default Ingrediente;
