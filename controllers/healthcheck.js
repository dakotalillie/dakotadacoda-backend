'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Application appears healthy!' });
});

module.exports = router;