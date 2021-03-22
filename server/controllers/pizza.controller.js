const {pizzaService} = require('../services');

const createPizza = async (req, res, next) => {
    try {
        const result = await pizzaService.createPizza(req.body);

        res.json(result);
    } catch (err) {
        next(err);
    }
};

const getAllPizza = async (req, res, next) => {
    try {
        const result = await pizzaService.getAllPizza();

        res.json(result);
    } catch (err) {
        next(err);
    }
};

const updatePizza = async (req, res, next) => {
    try {
        const {query: {id}, body} = req;

        const result = await pizzaService.updatePizzaById(body, id)

        res.json(result);
    } catch (err) {
        next(err);
    }
};

const deletePizza = async (req, res, next) => {
    try {
        const {query: {id}} = req;

        const result = await pizzaService.deletePizzaNyId(id);

        res.json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createPizza,
    getAllPizza,
    updatePizza,
    deletePizza
};