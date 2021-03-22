const router = require('express').Router();

const pizzaRouter = require('./pizza.router');

router.use('/pizza', pizzaRouter);

module.exports = router;