'use strict';

const express = require('express');

const sendMail = require('../utils/sendMail');
const validateParams = require('../middleware/validateParams');
const validateEmail = require('../utils/validations/validateEmail');
const logger = require('../utils/logger');

const router = express.Router();

router.post('/', validateParams(validateEmail), async (req, res) => {
  try {
    await sendMail(req.body);
    logger.info('Email successfully sent');
    res.send(req.body);
  } catch ({ message }) {
    logger.error(message);
    res.status(500).send(message);
  }
});

module.exports = router;