var Transaction = require('mongoose').model('Transaction');
var Account = require('mongoose').model('Account');
var moment = require('moment');

exports.create = function(req, res, next) {
    var transaction = new Transaction(req.body);
    transaction.status = transaction.status || "pending";
    transaction.date = transaction.date || Date.now();
    
    transaction.populate('source destination', function(err) {
        if (err) {
            return next(err);
        } else {
            transaction.destination.pastTransactions.push(transaction);
            if (transaction.destination.currentFunds == null) {
                transaction.destination.currentFunds = 0;
            }
            transaction.destination.currentFunds += transaction.amount;
            transaction.source.pastTransactions.push(transaction);
            if (transaction.destination.pastTransactions == null) {
                transaction.destination.pastTransactions = [];
            }
            transaction.destination.pastTransactions.push(transaction);
            transaction.source.currentFunds -= transaction.amount;
            transaction.save(function(err) {
               if (err) {
                   return next(err);
               } else {
                   transaction.source.save();
                   transaction.destination.save();
                   
                   res.json(transaction);
                }
            });
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
    var startDate = req.query.startDate || new moment().subtract(30, 'years');
    var endDate = req.query.endDate || new moment();
    var accountId = req.params.accountId;
    
    if (!accountId) {
        return res.json({'message': 'invalid parameters'});
    }
    
    Transaction.find()
    .where('source').equals(accountId)
    .where('date').gt(startDate).lt(endDate)
    .populate('source')
    .populate('destination')
    .populate('pastTransactions')
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
    Transaction.findByIdAndUpdate(req.transaction.id, req.body, function(err, transaction) {
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

exports.setTransactionStatus = function(req, res, next) {
    Transaction.findByIdAndUpdate(req.transaction.id, req.body, function(err, transaction) {
        if (err) {
            return next(err);
        } else {
            res.json(transaction);
        }
    });
};