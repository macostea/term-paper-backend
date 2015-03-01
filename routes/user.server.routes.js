var users = require('../controllers/users.server.controller');
var passport = require('passport');

module.exports = function(app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
    app.param('userId', users.userByID);
    app.route('/register')
        .post(users.register);
    app.route('/login')
        .post(passport.authenticate('local'), function (req, res) {
            users.loginSuccess(req, res);
        });
    app.get('/logout', users.logout);
};