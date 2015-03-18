var accounts = require('../controllers/accounts.server.controller');
var authorization = require('./authorization');

module.exports = function(app) {
    app.route('/accounts')
        .post(authorization.ensureAuthorized, accounts.create)
        .get(authorization.ensureAuthorized, accounts.list);
    app.route('/accounts/:accountId')
        .get(authorization.ensureAuthorized, accounts.read)
        .put(authorization.ensureAuthorized, accounts.update)
        .delete(authorization.ensureAuthorized, accounts.delete);
    app.param('accountId', accounts.accountByID);
    app.get('/users/:user_Id/accounts', accounts.accountsByUserId);
};