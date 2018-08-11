const express = require('express');

module.exports = function setupApp(app) {
  app.use(express.json());
  require('../routes')(app);
  const transporter = require('./setupEmail')();
  return transporter;
};