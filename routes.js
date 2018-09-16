'use strict';

const config = require('config');

const mailController = require('./controllers/mail');
const healthcheckController = require('./controllers/healthcheck');

const root = config.get('root');

module.exports = function configureRoutes(app) {
  app.use(`${root}`, mailController);
  app.use(`${root}/healthcheck`, healthcheckController);
};