'use strict';

const express = require('express');
const config = require('config');

const setupApp = require('./setup');
const logger = require('./utils/logger');

const PORT = config.get('port');

const app = express();
setupApp(app);
const server = app.listen(PORT, () => logger.info(`app listening on port ${PORT}`));

module.exports = server;