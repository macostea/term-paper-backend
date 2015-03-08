var transactions = require('../controllers/transactions.server.controller');

module.exports = function(app) {
    app.route('/transactions')
        .post(transactions.create)
        .get(transactions.list);
    app.route('/transactions/:transactionId')
        .get(transactions.read)
        .put(transactions.update)
        .delete(transactions.delete);
    app.route('/accounts/:accountId/transactions')
        .get(transactions.transactionsForAccountId);
    app.route('/transactions/:transactionId/status')
        .post(transactions.setTransactionStatus);
    app.param('transactionId', transactions.transactionByID);
};