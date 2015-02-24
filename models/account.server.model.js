var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
    
var AccountSchema = new Schema({
    status: String,
    pastTransactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}],
    currentFunds: Number,
    accountHolder: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Account', AccountSchema);