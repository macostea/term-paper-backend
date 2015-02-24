module.exports = function() {
    var config = require('../config');
    var express = require('express');
    var bodyParser = require('body-parser');
    var passport = require('passport');
    var flash = require('connect-flash');
    var session = require('express-session');
    
    var app = express();
    
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
    
    app.use(flash());
    
    app.set('views', './views');
    app.set('view engine', 'ejs');
    
    require('../routes/index.server.routes.js')(app);
    require('../routes/user.server.routes.js')(app);
    require('../routes/transaction.server.routes.js')(app);
    require('../routes/account.server.routes.js')(app);
    
    return app;
};