import server from './server'

class SyncronizeService {

	constructor(context) {
		this.component = context.component;
		this.delay = context.delay * 1000;
		this.url = context.url;
		
		this.install();
	}

	install(){
		var component = this.component;
		var proto = component.prototype;
		var oldWillMount = proto.componentWillMount || function() {};
		var update = this.update.bind(this);
 
		
		proto.componentWillMount = function() {
			update(this);
			oldWillMount.apply(this, arguments);
		};
	}
	
	update(component){
		
		console.log("updated!");
		this.request(component);
		setTimeout(this.update.bind(this, component), this.delay);
	}
	
	request(component){
		
		server.get(this.url, function(err, data){
			if(err){
				console.log(err);
				return;
			}
			
			component.setState(data);
		});
		
	}

}

function SyncronizeServiceDecorator(url){

	var context = {
		url: url,
		delay: 1
	};
	
	var decorator =  function(target){
		
		context.component = target;
		context.sync = new SyncronizeService(context);
		
	};
	
	decorator.every = function(delay){
		context.delay = delay;
		return decorator;
	};
	
	return decorator;
	
}

export function sync(target) {

	return SyncronizeServiceDecorator(target);

}