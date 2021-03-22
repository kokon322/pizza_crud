const path = require('path');
require('dotenv').config({path: path.join(process.cwd(), 'pizza_crud', 'server', '.env')});
const express = require('express');


const apiRouter = require('./routers/api.router');
const {PORT} = require('./configs/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
    res.status(err.status).json(err.message);
});

app.listen(PORT, () => {
    console.log(`${PORT} is work`);
});
