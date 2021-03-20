const {Schema, model} = require('mongoose');

const basketSchema = new Schema({
    _user_id: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model('Basket', basketSchema);