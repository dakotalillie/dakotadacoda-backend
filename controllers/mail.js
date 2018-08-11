'use strict';

const config = require('config');

async function sendEmail(req, res) {
  const { name, email, subject, text } = req.body;
  const myEmail = config.get('email');

  const transporter = await require('../setup/setupEmail')();

  const message = {
    from: myEmail,
    to: myEmail,
    replyTo: email,
    subject,
    text: `You have a new email from ${name}:\n\n${text}`
  };
  try {
    await transporter.sendMail(message);
    res.send();
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  sendEmail
};