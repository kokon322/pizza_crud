const path = require('path');
require('dotenv').config({path: path.join(process.cwd(), 'pizza_crud', 'server', '.env')});
const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./routers/api.router');
const {PORT, MONGO_URL} = require('./configs/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

_ConnectToDB();

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
    res.status(err.status).json(err.message);
});

app.listen(PORT, () => {
    console.log(`${PORT} is work`);
});

function _ConnectToDB() {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

    const {connection} = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}