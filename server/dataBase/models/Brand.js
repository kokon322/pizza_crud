const {Schema, model} = require('mongoose');

const brandSchema = new Schema({
    name: {type: String, required: true},
    title: {type: String, required: true}
});

module.exports = model('Brand', brandSchema);