require("babel/polyfill");
var db = require("./data/db");
var Hapi = require("hapi");
var fs = require("fs");
import auth from "./auth";

class Server {

	constructor() {
		this.loadControllers();
		this.preparations = [];
	}

	prepare(obj){
		this.preparations.forEach(function(preparation){
			preparation.apply(obj);
		});
		return obj;
	}

	loadControllers() {

		var controllers = []; 
		var path = __dirname + "/controllers";
		var files = fs.readdirSync(path);

		files
			.filter(function(file) {
				return /[a-z][0-9a-z-]{1,}(-controller\.js)/gi.test(file);
			})
			.forEach(function(file) {
				controllers.push(new(require(path + '/' + file))());
			});

		this.controllers = controllers;
	}

	start(props) {

		var server = new Hapi.Server();
		this.server = server;

		props.routes = {
			cors: true
		};

		server.connection(props);
		this.configAuth();

		this.initControllers(this);

		server.start();

		console.log(" - server started!");

	}

	route(routeConfig){ 
		routeConfig = this.prepare(routeConfig);
		console.log(routeConfig.path);
		this.server.route(routeConfig);

	}

	configAuth(){

		auth.install(this);

	}

	initControllers(server) {

		this.controllers.forEach(function(controller) {
			controller.start(server);
		});
	}

}


export default new Server();