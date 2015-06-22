var req = require('superagent-promise')(require('superagent'), Promise);

function doRequest(type, url, jwt){

	var r = req[type](url);
	if(jwt){
		r = r.set('Authorization', 'Bearer ' + jwt);
	}

	return r;

}

class RequestService {
	
	constructor(){
		this._jwt = false;
	}

	set token(token){
		this._jwt = token;
	}

	get token(){
		return this._jwt;
	}

	get(uri){
		return doRequest("get", uri, this._jwt);		
	}

	post(uri){
		return doRequest("post", uri, this._jwt);		
	}

	put(uri){
		return doRequest("put", uri, this._jwt);		
	}

	del(uri){
		return doRequest("delete", uri, this._jwt);		
	}

}

export default new RequestService();