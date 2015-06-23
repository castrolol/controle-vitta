import RouteContainer from './route-container';

function normalizePath(path) {

	path = path.charAt(0).toLowerCase() + path.slice(1);

	return path
		.replace(/[A-Z]/g, (upper) => "-" + upper.toLowerCase() )
		.replace(/[^0-9a-z-]/g, (invalid) => "-")
		.replace(/(-)\1{1,}/, () =>  "-" )
		.replace(/-$/, () => "" );
}


//decorators
function registerBaseRoute(path, target, property, descriptor){
	target.prototype.getBaseRoute = function(){
		return normalizePath(path);
	};
	return descriptor;
}

function registerRoute(method, path, config, target, property, descriptor) {
	path = path || property;

	if (target instanceof RouteContainer) {
		method = method.toLowerCase();
		
		if(path.toLowerCase().substring(-method.length) == method){
			path = path.substring(0, path.length - method.length);
		}
		
		var routePath = normalizePath(path);
		target.addRoute(routePath, method.toUpperCase(), property, config || {});
	}
}

function route(target, property, descriptor){
	return registerBaseRoute(target.name.replace(/Controller/gi, ""), target, property, descriptor);
}
	
function get(target, property, descriptor) {
	registerRoute("GET", property, {}, target, property, descriptor)
	return descriptor;
}
	
function post(target, property, descriptor) {
	registerRoute("POST", property, {}, target, property, descriptor)
	return descriptor;
}
	
function put(target, property, descriptor) {
	registerRoute("PUT", property, {}, target, property, descriptor)
	return descriptor;
}
	
function del(target, property, descriptor) {
	registerRoute("DELETE", property, {}, target, property, descriptor)
	return descriptor;
}

route.at = function(path){
	return registerBaseRoute.bind(this, path);
} 
 
get.at = function(path, config){
	return registerRoute.bind(this, "GET", path, config);
}

post.at = function(path, config){
	return registerRoute.bind(this, "POST", path, config);
}

put.at = function(path, config){
	return registerRoute.bind(this, "PUT", path, config);
}

del.at = function(path, config){
	return registerRoute.bind(this, "DELETE", path, config);
}

get.config = function(config){
	return registerRoute.bind(this, "GET", null, config);
}

post.config = function(config){
	return registerRoute.bind(this, "POST", null, config);
}

put.config = function(config){
	return registerRoute.bind(this, "PUT", null, config);
}

del.config = function(config){
	return registerRoute.bind(this, "DELETE", null, config);
}




var http = {
	get,
	post,
	put,
	del,
	route
};

export var http;
export var route;
export var get;
export var post;
export var put;
export var del;

export default http;