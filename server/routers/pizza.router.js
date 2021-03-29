const router = require('express').Router();

const {pizzaController: {createPizza, getAllPizza, updatePizza, deletePizza}} = require('../controllers');
const {pizzaMiddleware: {isPizzaValid, isPizzaPresentInDB}}= require('../middlewares');

router
    .post('/', isPizzaValid, createPizza)
    .get('/', getAllPizza)
    .put('/', isPizzaPresentInDB, updatePizza)
    .delete('/', isPizzaPresentInDB, deletePizza);

module.exports = router;