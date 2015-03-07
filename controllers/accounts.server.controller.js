var Account = require('mongoose').model('Account'),
    User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var account = new Account(req.body);
    account.save(function(err) {
       if (err) {
           return next(err);
       } else {
           res.json(account);
       }
    });
};

exports.list = function(req, res, next) {
    Account.find({}, function(err, accounts) {
        if (err) {
            return next(err);
        } else {
            res.json(accounts);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.account);
};

exports.accountByID = function(req, res, next, id) {
    Account.findOne({
        _id: id
    }, function(err, account) {
        if (err) {
            return next(err);
        } else {
            req.account = account;
            if (account == null) {
                return res.json({'message':'account not found'});
            }
            next();
        }
    });
};

exports.accountsByUserId = function(req, res, next) {
    User.findOne({_id: req.params.user_Id})
    .populate('accounts')
    .exec(function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user.accounts);
        }
    });
};

exports.update = function(req, res, next) {
    Account.findByIdAndUpdate(req.account.id, req.body, function(err, account) {
        if (err) {
            return next(err);
        } else {
            res.json(account);
        }
    });
};

exports.delete = function(req, res, next) {
    req.account.remove(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({'message':'account deleted'});
        }
    });
};
