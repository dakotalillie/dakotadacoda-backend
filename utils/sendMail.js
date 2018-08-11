'use strict';

const config = require('config');

const createVerifiedTransport = require('../setup/setupEmail');

module.exports = async function sendMail({ name, email, subject, text }) {
  const myEmail = config.get('email');
  const transporter = await createVerifiedTransport();
  await transporter.sendMail({
    from: myEmail,
    to: myEmail,
    replyTo: email,
    subject,
    text: `You have a new email from ${name}:\n\n${text}`
  });
};