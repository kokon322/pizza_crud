const Joi = require('joi');

module.exports = Joi.object({
    id: Joi
        .number()
        .integer()
        .positive(),
    name: Joi
        .string()
        .alphanum()
        .required()
        .min(4)
        .max(25),
    description: Joi
        .string()
        .alphanum()
        .required()
        .min(10)
        .max(255)
})
