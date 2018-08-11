'use strict';

const express = require('express');
const config = require('config');

const setupApp = require('./setup');

const PORT = config.get('port');

const app = express();
setupApp(app);
const server = app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

module.exports = server;