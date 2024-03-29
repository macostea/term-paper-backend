var User = require('mongoose').model('User'),
    Account = require('mongoose').model('Account'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    config = require('../config');
    
var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch(err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
                
            default:
                message: 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    
    return message;
};

exports.register = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.token = jwt.sign(user, config.jwtSecret);
        user.save(function(err) {
            if (err) {
                var message = getErrorMessage(err);
                res.json({'message':message});
            }
            
            res.json(user);
        })
    } else {
        res.json(req.user);
    }
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
       if (err) {
           return next(err);
       } else {
           res.json(user);
       }
    });
};

exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            if (user == null) {
                return res.json({'message':'user not found'});
            }
            next();
        }
    });
};

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    req.user.remove(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({'message':'user deleted'});
        }
    });
};

exports.loginSuccess = function(req, res) {
    res.json(
        {
            user:req.user,
            token:req.user.token
        }
    );
}

exports.addAccount = function(req, res, next) {
    var account = new Account();
    account.accountHolder = req.user;
    account.save(function(err) {
        if (err != null) {
            return next(err);
        }
        
        req.user.accounts.push(account);
        req.user.save(function(err) {
            if (err != null) {
                return next(err);
            }
            
            res.json(account);
        });
    });
};