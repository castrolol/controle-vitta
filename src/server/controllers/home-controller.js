import Controller from '../core/controller';
import {get, route} from '../core/http-extensions';

@route
export default class FileController extends Controller {
     
     constructor(){
          super();
          
          this.addRoute(function(){
             
             return { 
                method: 'GET',
                path: '/{param*}',
                handler: {
                    directory: {
                        path: 'dist',
                        listing: true
                    }
                },
                config: { auth: null }
             };
              
          });
          
          this.addRoute(function(){
             
             return {
                 method: 'GET',
                 path: '/',
                 handler: function(req, reply){
                     return reply.file("dist/index.html");
                 },
                 config: { auth: null }
             }
              
          });
          
     }

    
}