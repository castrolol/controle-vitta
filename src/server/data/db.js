var anydbsql = require('anydb-sql');

var host = "ec2-54-83-17-8.compute-1.amazonaws.com";
var base = "d5v2bfbgtd4082";
var user = "ltaosfpgwhbhky";
var port = 5432;
var pass = "Kpaql1A1AUXUKMrlLiN3WZAbkl";

var db = anydbsql({
    url: 'postgres://ltaosfpgwhbhky:Kpaql1A1AUXUKMrlLiN3WZAbkl@ec2-54-83-17-8.compute-1.amazonaws.com:5432/d5v2bfbgtd4082',
    connections: { min: 2, max: 20 },
    onConnect: (ok, err) => {
    	console.log(arguments);
    }
});
 

export default db;