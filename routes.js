'use strict';

const { sendEmail } = require('./controllers/mail');

const BASE = '/api/v1';

module.exports = function configureRoutes(app) {
  app.post(`${BASE}/`, sendEmail);
};