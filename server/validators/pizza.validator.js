const Joi = require('joi');

module.exports = Joi.object({
    name: Joi
        .string()
        .required()
        .min(2)
        .max(25),
    description: Joi
        .string()
        .required()
        .min(10)
        .max(1000),
    img: Joi
        .string()
        .required()
})
