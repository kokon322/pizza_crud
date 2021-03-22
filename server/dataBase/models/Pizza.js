const sequelize = require('../connectionToDB');
const seq = require('sequelize');

const Pizza = sequelize.define('pizza', {
    id: {type: seq.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: seq.DataTypes.STRING},
    description: {type: seq.DataTypes.STRING},
    img: {type: seq.DataTypes.STRING}
});

module.exports = Pizza;