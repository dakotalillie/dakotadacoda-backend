'use strict';

const express = require('express');

const sendMail = require('../utils/sendMail');
const validateParams = require('../middleware/validateParams');
const validateEmail = require('../utils/validations/validateEmail');

const router = express.Router();

router.post('/', validateParams(validateEmail), async (req, res) => {
  try {
    await sendMail(req.body);
    res.send(req.body);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;