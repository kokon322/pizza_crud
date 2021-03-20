const {Schema, model} = require('mongoose');

const basketDeviceSchema = new Schema({
    _basket_id: {type: Schema.Types.ObjectId, ref: 'Basket'},
    _device_id: {type: Schema.Types.ObjectId, ref: 'Device'}
});

module.exports = model('Basket_Device', basketDeviceSchema);