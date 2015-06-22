function duplicateTo(name){
	return function(target, oldName, descriptor){
		Object.defineProperty(target, name, descriptor);
	}
}

var DataService = {};

DataService.of = function(entity){

	var entityModel = require("../data-model/" + entity + "-model");

	return class DataService {

		@duplicateTo(entity)
		get model(){
			return entityModel;
		}

	};

};

export default DataService;