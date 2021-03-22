const router = require('express').Router();

const {pizzaController: {createPizza, getAllPizza, updatePizza, deletePizza}} = require('../controllers');

router
    .post('/', createPizza)
    .get('/', getAllPizza)
    .put('/', updatePizza)
    .delete('/', deletePizza);

module.exports = router;