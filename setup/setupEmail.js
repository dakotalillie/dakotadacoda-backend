const nodemailer = require('nodemailer');
const config = require('config');

module.exports = async function setupEmail() {
  const username = config.get('user');
  const password = config.get('pass');

  if (!username || !password) {
    throw new Error('username and password environment variables must be set');
  }

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