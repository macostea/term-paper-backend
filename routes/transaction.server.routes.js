var transactions = require('../controllers/transactions.server.controller');

module.exports = function(app) {
    app.route('/transactions')
        .post(transactions.create)
        .get(transactions.list);
    app.route('/transactions/:transactionId')
        .get(transactions.read)
        .put(transactions.update)
        .delete(transactions.delete);
    app.param('transactionId', transactions.transactionByID);
    app.route('/accounts/:accountId/transactions')
        .get(transactions.transactionsForAccountId);
};