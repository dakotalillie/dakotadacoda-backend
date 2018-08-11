'use strict';

const config = require('config');
const Joi = require('joi');

const createVerifiedTransport = require('../setup/setupEmail');

async function sendEmail(req, res) {
  const { error } = validateParams(req);
  if (error) return res.status(400).send({ error: error.details[0].message} );

  const { name, email, subject, text } = req.body;
  const myEmail = config.get('email');

  const transporter = await createVerifiedTransport();

  try {
    // await transporter.sendMail({
    //   from: myEmail,
    //   to: myEmail,
    //   replyTo: email,
    //   subject,
    //   text: `You have a new email from ${name}:\n\n${text}`
    // });
    res.send(req.body);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

function validateParams(req) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    text: Joi.string().required()
  };

  return Joi.validate(req.body, schema);
}

module.exports = {
  sendEmail
};