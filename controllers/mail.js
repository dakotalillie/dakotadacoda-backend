const { transporter } = require('../app');

function sendEmail(req, res) {
  res.status(204).send();
}

module.exports = {
  sendEmail
};