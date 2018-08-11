'use strict';

const mailController = require('./controllers/mail');

const BASE = '/api/v1';

module.exports = function configureRoutes(app) {
  app.use(`${BASE}`, mailController);
};