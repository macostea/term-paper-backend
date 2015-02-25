{"changed":true,"filter":false,"title":"user.server.routes.js","tooltip":"/routes/user.server.routes.js","value":"var users = require('../controllers/users.server.controller');\nvar passport = require('passport');\n\nmodule.exports = function(app) {\n    app.route('/users')\n        .post(users.create)\n        .get(users.list);\n    app.route('/users/:userId')\n        .get(users.read)\n        .put(users.update)\n        .delete(users.delete);\n    app.param('userId', users.userByID);\n    app.route('/register')\n        .post(users.register);\n    app.route('/login')\n        .post(passport.authenticate('local'), function (req, res) {\n            users.loginSuccess(req, res);\n        });\n    app.get('/logout', users.logout);\n};","undoManager":{"mark":69,"position":73,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":["var users = require('../controllers/users.server.controller');","var passport = require('passport');","","module.exports = function(app) {","    app.route('/users')","        .post(users.create)","        .get(users.list);","    app.route('/users/:userId')","        .get(users.read)","        .put(users.update)","        .delete(users.delete);","    app.param('userId', users.userByID);","    app.route('/register')","        .get(users.renderRegister)","        .post(users.register)","    app.route('/login')","        .get(users.renderLogin)","        .post(passport.authenticate('local', {","            successRedirect: '/',","            failureRedirect: '/login',","            failureFlash: true","        }));","    app.get('/logout', users.logout);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":1},"end":{"row":23,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":31},"end":{"row":17,"column":0},"action":"insert","lines":["",""]},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":9},"end":{"row":17,"column":11},"action":"remove","lines":["po"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":15},"action":"insert","lines":["post()"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"remove","lines":["p"]},{"start":{"row":17,"column":14},"end":{"row":17,"column":22},"action":"insert","lines":["passport"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":["a"]},{"start":{"row":17,"column":23},"end":{"row":17,"column":37},"action":"insert","lines":["authenticate()"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":36},"end":{"row":17,"column":38},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":55},"end":{"row":17,"column":57},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":56},"end":{"row":17,"column":57},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":57},"end":{"row":17,"column":58},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":58},"end":{"row":17,"column":59},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":59},"end":{"row":17,"column":60},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":60},"end":{"row":17,"column":61},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":61},"end":{"row":17,"column":62},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":62},"end":{"row":17,"column":63},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":63},"end":{"row":17,"column":64},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":65},"end":{"row":17,"column":66},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":66},"end":{"row":17,"column":68},"action":"insert","lines":["{}"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":67},"end":{"row":19,"column":8},"action":"insert","lines":["","            ","        "]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":8},"end":{"row":24,"column":11},"action":"remove","lines":[".post(passport.authenticate('local', {","            successRedirect: '/',","            failureRedirect: '/login',","            failureFlash: true","        }))"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":4},"end":{"row":20,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":10},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":21},"end":{"row":18,"column":22},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":22},"end":{"row":18,"column":23},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":23},"end":{"row":18,"column":24},"action":"insert","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":18},"end":{"row":18,"column":24},"action":"remove","lines":["loginS"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":32},"action":"insert","lines":["loginSuccess()"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":31},"end":{"row":18,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":35},"end":{"row":18,"column":36},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":36},"end":{"row":18,"column":37},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":37},"end":{"row":18,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":40},"end":{"row":18,"column":41},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":31},"action":"remove","lines":["        .get(users.renderLogin)"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":23},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":13,"column":34},"action":"remove","lines":["        .get(users.renderRegister)"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":26},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":60.19999999999999,"scrollleft":0,"selection":{"start":{"row":12,"column":26},"end":{"row":12,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":103,"mode":"ace/mode/javascript"}},"timestamp":1424884645480}