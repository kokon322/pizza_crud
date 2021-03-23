const path = require('path');
require('dotenv').config({path: path.join(process.cwd(), 'pizza_crud', 'server', '.env')});
const express = require('express');

const cors = require('cors');

const apiRouter = require('./routers/api.router');
const {PORT} = require('./configs/config');
const sequelize = require('./dataBase/connectionToDB');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
    res.status(err.status).json(err.message);
});

const startApi = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`${PORT} is work`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApi();
