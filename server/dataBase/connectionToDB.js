const {Sequelize} = require('sequelize');

const {NAME_DB, USER_DB, PASSWORD_DB, HOST_DB, PORT_DB} = require('../configs/config');

module.exports = new Sequelize(
    NAME_DB,
    USER_DB,
    PASSWORD_DB,
    {
        dialect: 'postgres',
        host: HOST_DB,
        port: PORT_DB
    }
);