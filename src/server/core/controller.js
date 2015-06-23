import RouteContainer from './route-container';

export default class Controller extends RouteContainer {
    
    constructor(){
        super();
 
    }
    
    start(server){
        
        this.routes.forEach( route => {
            var r = route();
            server.route(r);
        });
        
    }
    
}