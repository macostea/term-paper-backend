var port = process.env.PORT;
var ip = process.env.IP;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config'),
    mongoose = require('./config/mongoose'),
    pp = require('./config/passport'),
    express = require('./config/express');

var db = mongoose();
var app = express();
var passport = pp();

app.listen(port, ip);
module.exports = app;

console.log('Server running at ' + ip + ':' + port);
