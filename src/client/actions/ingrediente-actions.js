import AppDispatcher from '../dispatchers/app-dispatcher.js';
import {SHOW_INGREDIENTES, INGREDIENTE_URL} from '../constants/ingrediente-constants.js';
import RouterContainer from '../services/router-container'
import request from '../ext/request';

class IngredienteActions {

    showIngredientes(jwt) {

        var req = request
            .get(INGREDIENTE_URL)
            .end()
            .then(function(req) {

                AppDispatcher.dispatch({
                    actionType: SHOW_INGREDIENTES,
                    ingredientes: req.body
                });

            })
            .catch(function(err) {

                console.log(err);

            });
    }
}


export default new IngredienteActions();