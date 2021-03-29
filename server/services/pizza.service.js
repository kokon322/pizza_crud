const {Models: {Pizza}} = require('../dataBase');

const createPizza = (pizza) => Pizza.create(pizza);

const getAllPizza = () => Pizza.findAll();

const getPizzaById = (id) => Pizza.findOne({where: {id: id}});

const updatePizzaById = (updatePizza, id) => Pizza.update(updatePizza, {where: {id: id}});

const deletePizzaNyId = (id) => Pizza.destroy({where: {id: id}});

module.exports = {
    createPizza,
    getAllPizza,
    getPizzaById,
    updatePizzaById,
    deletePizzaNyId
};