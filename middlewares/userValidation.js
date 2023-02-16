const Joi = require('joi');

/* .........................User Schema Validation...................... */
const userSchemaValidation = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
    date: Joi.date()
});

/* .........................Login Schema Validation...................... */
const loginSchemaValidation = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required()
});

module.exports = {
    userSchemaValidation,
    loginSchemaValidation
}