export default class RouteContainer {

	constructor() {
	}

	setBaseRoute(base){
		this.baseRoute = base;
	}

	addRoute(path, method, handler, config ) {
 		
		if(!this.routes ) this.routes = [];
		if(typeof path == "function"){
			this.routes.push(path);
			return;
		}
		
		this.routes.push(function(){
			var routePath = "";
			if(path){
				routePath = "/" + path;	
			} 
			if(this.getBaseRoute){
				routePath = "/" + this.getBaseRoute() + routePath;
			}
			
			return {
				path:  routePath,
				method: method,
				handler: this[handler].bind(this),
				config: config
			};
		}.bind(this));
	}
}
