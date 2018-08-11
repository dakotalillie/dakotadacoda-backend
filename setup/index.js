const express = require('express');

module.exports = function setupApp(app) {
  app.use(express.json());
  require('../routes')(app);
  require('./verifyConfig')();
};