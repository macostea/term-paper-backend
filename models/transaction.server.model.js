var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
    
var TransactionSchema = new Schema({
    source: {type: Schema.Types.ObjectId, ref: 'Account'},
    date: Date,
    destination: {type: Schema.Types.ObjectId, ref: 'Account'},
    amount: Number
});

mongoose.model('Transaction', TransactionSchema);