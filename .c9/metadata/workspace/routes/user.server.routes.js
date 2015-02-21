{"filter":false,"title":"user.server.routes.js","tooltip":"/routes/user.server.routes.js","undoManager":{"mark":2,"position":2,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":["var users = require('../controllers/users.server.controller');","var passport = require('passport');","","module.exports = function(app) {","    app.route('/users')","        .post(users.create)","        .get(users.list);","    app.route('/users/:userId')","        .get(users.read)","        .put(users.update)","        .delete(users.delete);","    app.param('userId', users.userByID);","    app.route('/register')","        .get(users.renderRegister)","        .post(users.register)","    app.route('/login')","        .get(users.renderLogin)","        .post(passport.authenticate('local', {","            successRedirect: '/',","            failureRedirect: '/login',","            failureFlash: true","        }));","    app.get('/logout', users.logout);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":1},"end":{"row":23,"column":2},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":23},"end":{"row":4,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":0,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424536967344,"hash":"4d3756289b8976fa6040d45ad2c7831387dc87ea"}