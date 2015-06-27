import AppDispatcher from '../dispatchers/app-dispatcher.js';
import {SHOW_INGREDIENTES, INGREDIENTE_URL} from '../constants/ingrediente-constants.js';
import RouterContainer from '../services/router-container'
import request from '../ext/request';
import Ingrediente from '../model/ingrediente-model';

class IngredienteActions {

    showIngredientes(jwt) {

        var req = request
            .get(INGREDIENTE_URL)
            .end()
            .then(function(req) {

                var itens = Ingrediente.from(req.body);

                AppDispatcher.dispatch({
                    actionType: SHOW_INGREDIENTES,
                    ingredientes: itens
                });

            })
            .catch(function(err) {

                console.log(err);

            });
    }
}


export default new IngredienteActions();