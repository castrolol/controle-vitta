import moment from 'moment';

function getItem(id){
    
    try{
        var json = localStorage.getItem(id);
        if(json){
           return JSON.parse(json); 
        }
    }catch(e){
        localStorage.removeItem(id);
    }
    
    return null;
}

function setItem(id, value){
    localStorage.setItem(id, JSON.stringify(value));
}

class Cache {

    get(id, resolveData){
        
        return new Promise((resolve, reject) => {
            
            var cached = getItem(id);
            
            if(!cached || cached.expiration <= new Date()){
                
                resolveData(function(err, result){
                   if(err) return reject(err);
                   
                   var expirationDate = moment().add(1, 'days').toDate();
                
                    cached = {
                        value: result,
                        expiration: expirationDate
                    };
                    
                    setItem(id, cached);
                    resolve(cached.value);
                    
                });
                
            }else{
                resolve(cached.value);
            }
    
            
        }) 
        
    }
    
}



export default new Cache();