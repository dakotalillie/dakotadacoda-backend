const express = require('express');

module.exports = async function setupApp(app) {
  app.use(express.json());
  require('../routes')(app);
  try {
    const transporter = await require('./setupEmail')();
    return transporter;
  } catch (err) {
    throw err;
  }
};