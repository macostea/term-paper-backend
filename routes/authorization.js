function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader === 'undefined') {
        return res.sendStatus(403);
    }
    
    var bearer = bearerHeader.split(' ');
    bearerToken = bearer[1];
    req.token = bearerToken;
    next();
}

exports.ensureAuthorized = ensureAuthorized;