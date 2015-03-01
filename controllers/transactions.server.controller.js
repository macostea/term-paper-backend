var Transaction = require('mongoose').model('Transaction');

exports.create = function(req, res, next) {
    var transaction = new Transaction(req.body);
    transaction.save(function(err) {
       if (err) {
           return next(err);
       } else {
           res.json(transaction);
       }
    });
};

exports.list = function(req, res, next) {
    Transaction.find({}, function(err, transactions) {
        if (err) {
            return next(err);
        } else {
            res.json(transactions);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.transaction);
};

exports.transactionByID = function(req, res, next, id) {
    Transaction.findOne({
        _id: id
    }, function(err, transaction) {
        if (err) {
            return next(err);
        } else {
            req.transaction = transaction;
            if (transaction == null) {
                return res.json({'message':'transaction not found'});
            }
            next();
        }
    });
};

exports.transactionsForAccountId = function(req, res, next) {
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    var accountId = req.params.accountId;
    
    Transaction.find()
    .where('source').equals(accountId)
    .where('date').gt(startDate).lt(endDate)
    .populate('source')
    .populate('destination')
    .sort('-date')
    .exec(function(err, transactions) {
        if (err) {
            return next(err);
        } else {
            res.json(transactions);
        }
    });
};

exports.update = function(req, res, next) {
    Transaction.findByIdAndUpdate(req.user.id, req.body, function(err, transaction) {
        if (err) {
            return next(err);
        } else {
            res.json(transaction);
        }
    });
};

exports.delete = function(req, res, next) {
    req.transaction.remove(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({'message':'transaction deleted'});
        }
    });
};
