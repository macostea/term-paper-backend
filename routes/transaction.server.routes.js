var transactions = require('../controllers/transactions.server.controller');
var authorization = require('./authorization');

module.exports = function(app) {
    app.route('/transactions')
        .post(authorization.ensureAuthorized, transactions.create)
        .get(authorization.ensureAuthorized, transactions.list);
    app.route('/transactions/:transactionId')
        .get(authorization.ensureAuthorized, transactions.read)
        .put(authorization.ensureAuthorized, transactions.update)
        .delete(authorization.ensureAuthorized, transactions.delete);
    app.route('/accounts/:accountId/transactions')
        .get(authorization.ensureAuthorized, transactions.transactionsForAccountId);
    app.route('/transactions/:transactionId/status')
        .post(authorization.ensureAuthorized, transactions.setTransactionStatus);
    app.param('transactionId', transactions.transactionByID);
};