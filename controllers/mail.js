'use strict';

const config = require('config');

const createVerifiedTransport = require('../setup/setupEmail');

async function sendEmail(req, res) {
  const { name, email, subject, text } = req.body;
  const myEmail = config.get('email');

  const transporter = await createVerifiedTransport();

  try {
    await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      replyTo: email,
      subject,
      text: `You have a new email from ${name}:\n\n${text}`
    });
    res.send();
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  sendEmail
};