const { transporter } = require('../app');

function sendEmail(req, res) {
  res.send(req.body);
}

module.exports = {
  sendEmail
};