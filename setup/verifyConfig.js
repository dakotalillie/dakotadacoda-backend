'use strict';

const config = require('config');

module.exports = function verifyConfig() {
  const username = config.get('user');
  const password = config.get('pass');
  const email = config.get('email');

  if (!username || !password || !email) {
    throw new Error('Environment variables not properly configured');
  }
};