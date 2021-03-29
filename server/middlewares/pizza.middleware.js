const {ErrorHandler, ErrorMessage: {PIZZA_IS_NOT_VALID, NOT_PRESENT_IN_DB}} = require('../errorHandler');
const {pizzaService: {getAllPizza}} = require('../services');
const {pizzaValidator} = require('../validators');


const isPizzaValid = async (req, res, next) => {
    try {
        const {error} = await pizzaValidator.validate(req.body);

        if (error) {
            throw new ErrorHandler(PIZZA_IS_NOT_VALID.status, PIZZA_IS_NOT_VALID.message);
        }

        res.json();
    } catch (err) {
        next(err);
    }
};

const isPizzaPresentInDB = async (req, res, next) => {
    try {
        const {query: {id}} = req;

        const result = await getAllPizza({where: {id: id}});

        if (!result.length) {
            throw new ErrorHandler(NOT_PRESENT_IN_DB.status, NOT_PRESENT_IN_DB.message);
        }
        res.json();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    isPizzaValid,
    isPizzaPresentInDB
}