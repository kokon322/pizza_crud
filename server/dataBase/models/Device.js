const {Schema, model} = require('mongoose');

const deviceSchema = new Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    _brand_id: {type: Schema.Types.ObjectId, ref: 'Brand'}

});

module.exports = model('Device', deviceSchema);