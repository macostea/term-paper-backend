var accounts = require('../controllers/accounts.server.controller');

module.exports = function(app) {
    app.route('/accounts')
        .post(accounts.create)
        .get(accounts.list);
    app.route('/accounts/:accountId')
        .get(accounts.read)
        .put(accounts.update)
        .delete(accounts.delete);
    app.param('accountId', accounts.accountByID);
    app.get('/users/:user_Id/accounts', accounts.accountsByUserId);
};