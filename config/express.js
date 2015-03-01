module.exports = function() {
    var config = require('../config');
    var express = require('express');
    var bodyParser = require('body-parser');
    var passport = require('passport');
    var flash = require('connect-flash');
    var session = require('express-session');
    
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    
        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
          res.sendStatus(200);
        }
        else {
          next();
        }
    };
    
    var app = express();
    var router = express.Router();
    
    app.use(allowCrossDomain);
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSuperSecretCookieSecret'
    }));
    
    router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next(); 
    });
    
    require('../routes/index.server.routes.js')(router);
    require('../routes/user.server.routes.js')(router);
    require('../routes/transaction.server.routes.js')(router);
    require('../routes/account.server.routes.js')(router);
    
    app.use('/', router);
    
    return app;
};