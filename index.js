var server = require("./build/server");

server.start({
   host: process.env.IP || "localhost",
   port: process.env.PORT || 8000
});
