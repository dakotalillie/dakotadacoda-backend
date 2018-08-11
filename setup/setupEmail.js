const nodemailer = require('nodemailer');
const config = require('config');

module.exports = async function createVerifiedTransport() {
  const username = config.get('user');
  const password = config.get('pass');

  const transporter = nodemailer.createTransport(
    `smtp://${username}:${password}@smtp.mail.me.com`
  );

  try {
    await transporter.verify();
    return transporter;
  } catch (err) {
    throw new Error('Error setting up transporter');
  }
};