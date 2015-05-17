var users = require('../controllers/users.server.controller');
var passport = require('passport');
var authorization = require('./authorization');

module.exports = function(app) {
    app.route('/users')
        .post(authorization.ensureAuthorized, users.create)
        .get(authorization.ensureAuthorized, users.list);
    app.route('/users/:userId')
        .get(authorization.ensureAuthorized, users.read)
        .put(authorization.ensureAuthorized, users.update)
        .delete(authorization.ensureAuthorized, users.delete);
    app.route('/users/:userId/addAccount')
        .post(authorization.ensureAuthorized, users.addAccount);
    app.param('userId', users.userByID);
    app.route('/register')
        .post(users.register);
    app.route('/login')
        .post(passport.authenticate('local'), function (req, res) {
            users.loginSuccess(req, res);
        });
    app.get('/logout', users.logout);
};