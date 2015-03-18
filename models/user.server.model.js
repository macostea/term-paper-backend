var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
    
var UserSchema = new Schema({
    name: String,
    email: String,
    address: String,
    password: String,
    provider: String,
    providerId: String,
    providerData: {},
    accounts: [{type: Schema.Types.ObjectId, ref: 'Account'}],
    type: String,
    token: String
});

UserSchema.pre('save', function(next) {
    if (this.password) {
        var md5 = crypto.createHash('md5');
        this.password = md5.update(this.password).digest('hex');
    }
    
    next();
});

UserSchema.methods.authenticate = function(password) {
    var md5 = crypto.createHash('md5');
    md5 = md5.update(password).digest('hex');
    
    return this.password === md5;
};

mongoose.model('User', UserSchema);