var config = require('../config.js'),
    mongoose = require('mongoose');
    
module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../models/user.server.model');
    
    return db;
};