const {ErrorHandler, ErrorMessage: {PIZZA_IS_NOT_VALID, NOT_PRESENT_IN_DB}} = require('../errorHandler');
const {pizzaService: {getPizzaById}} = require('../services');
const {pizzaValidator} = require('../validators');


const isPizzaValid = async (req, res, next) => {
    try {
        const {error} = await pizzaValidator.validate(req.body);
        if (error) {
            throw new ErrorHandler(PIZZA_IS_NOT_VALID.status, PIZZA_IS_NOT_VALID.message);
        }
        next();
    } catch (err) {
        next(err);
    }
};

const isPizzaPresentInDB = async (req, res, next) => {
    try {
        const {query: {id}} = req;

        const result = await getPizzaById(id);

        if (result === null) {
            throw new ErrorHandler(NOT_PRESENT_IN_DB.status, NOT_PRESENT_IN_DB.message);
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    isPizzaValid,
    isPizzaPresentInDB
}