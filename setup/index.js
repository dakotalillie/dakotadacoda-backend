const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

module.exports = function setupApp(app) {
  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  require('../routes')(app);
  require('./verifyConfig')();
  require('./setupEmail')();
};