const Joi = require('joi');

module.exports = function validateEmail(req) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    text: Joi.string().required()
  };

  return Joi.validate(req.body, schema);
};